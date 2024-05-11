import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';
import { Request, Response } from 'express';

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
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp(); // Obtiene el contexto HTTP
    const response = ctx.getResponse<Response>(); // Obtiene la respuesta
    const request = ctx.getRequest<Request>(); // Obtiene la solicitud
    const status = exception.getStatus(); // Obtiene el código de estado HTTP
    const error = exception.getResponse(); // Obtiene la respuesta de la excepción

    // Devuelve una respuesta JSON con detalles del error
    response.status(status).json({
      statusCode: status,
      timestamp: new Date().toISOString(),
      path: request.url,
      detail: exception.message,
      ...(typeof error === 'object' ? error : {}),
    });
  }
}
