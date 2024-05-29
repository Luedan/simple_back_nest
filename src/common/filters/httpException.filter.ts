/* istanbul ignore file */
import { EmailParameter } from '@app/domain/parameters/email/emailParameter.entity';
import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';
import { Request, Response } from 'express';
import * as pg from 'pg';
import { createTransport } from 'nodemailer';

/**
 * Captura todas las excepciones HTTP y devuelve una respuesta JSON.
 */
@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  /**
   * Captura la excepción HTTP y devuelve una respuesta JSON.
   *
   * @param exception La excepción HTTP a capturar.
   * @param host Los argumentos del host.
   */
  async catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp(); // Obtiene el contexto HTTP
    const response = ctx.getResponse<Response>(); // Obtiene la respuesta
    const request = ctx.getRequest<Request>(); // Obtiene la solicitud
    const status = exception.getStatus(); // Obtiene el código de estado HTTP
    const error = exception.getResponse(); // Obtiene la respuesta de la excepción

    const err = {
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
      detail: exception.message,
      ...(typeof error === 'object' ? error : {}),
    };

    if (process.env.EMAIL_ERRORS && process.env.NODE_ENV === 'production') {
      const { Client } = pg;
      const client = new Client({
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT),
        user: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        keepAlive: false,
      });

      await client.connect();

      const data = await client.query<EmailParameter>(
        'select * from public.email_parameter ep;',
      );

      await client.end();

      const parameter = data.rows[0];

      const transporter = createTransport({
        host: parameter.host,
        port: parameter.port,
        secure: parameter.secure,
        auth: {
          user: parameter.username,
          pass: parameter.password,
        },
      });

      await transporter.sendMail({
        from: parameter.from,
        to: process.env.EMAIL_ERRORS,
        subject: 'Error en la API: ' + err.path,
        html: `
      <div>
        <ul>
            <li>Status: ${err.statusCode}</li>
            <li>Detail: ${err.detail}</li>
            <li>Path: ${err.path}</li>
            <li>Date: ${err.timestamp}</li>
            <li>Error Message: ${(error as any)?.message}</li>
        </ul>
      </div>
      `,
      });
    }

    // Devuelve una respuesta JSON con detalles del error
    response.status(status).json(err);
  }
}
