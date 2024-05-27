import { SendEmailRequestDto } from '@app/domain/email/dto/sendEmail-request.dto';
import { SendEmailByParameterIdInterface } from '@app/domain/interfaces/infrastructure/external/email/sendEmailByParameterId.interface';
import { EmailParameterRepository } from '@app/infrastructure/persistence/repositories/parameters/email/emailParameter.repository';
import { Injectable, NotFoundException } from '@nestjs/common';
import { createTransport } from 'nodemailer';

@Injectable()
export class SendEmailByParameterId implements SendEmailByParameterIdInterface {
  constructor(
    private readonly _emailParameterRepository: EmailParameterRepository,
  ) {}

  async execute(id: number, email: SendEmailRequestDto): Promise<void> {
    try {
      const emailParameters = await this._emailParameterRepository.findBy({
        where: {
          id,
        },
      });

      if (!emailParameters) {
        throw new NotFoundException('Email parameters not found');
      }

      const transporter = createTransport({
        host: emailParameters.host,
        port: emailParameters.port,
        secure: emailParameters.secure,
        auth: {
          user: emailParameters.username,
          pass: emailParameters.password,
        },
      });

      await transporter.sendMail({
        from: emailParameters.from,
        to: email.to,
        subject: email.subject || '',
        text: email.text || '',
        html: email.html || '',
      });
    } catch (error) {
      throw new Error(error);
    }
  }
}
