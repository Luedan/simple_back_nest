import { SendEmailRequestDto } from '@app/domain/email/dto/sendEmail-request.dto';

/**
 * Represents an interface for sending emails.
 */
export interface SendEmailInterface {
  /**
   * Sends an email.
   * @param email - The email request DTO.
   * @returns A promise that resolves when the email is sent successfully.
   */
  execute(email: SendEmailRequestDto): Promise<void>;
}
