import { SendEmailRequestDto } from '@app/domain/email/dto/sendEmail-request.dto';

/**
 * Represents an interface for sending an email by parameter ID.
 */
export interface SendEmailByParameterIdInterface {
  /**
   * Executes the email sending operation.
   * @param id - The ID of the parameter.
   * @param email - The email request DTO.
   * @returns A promise that resolves when the email is sent successfully.
   */
  execute(id: number, email: SendEmailRequestDto): Promise<void>;
}
