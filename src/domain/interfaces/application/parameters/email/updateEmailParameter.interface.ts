import { EmailParameterResponseDto } from '@app/domain/parameters/email/dto/emailParameter-response.dto';
import { EmailParameterUpdateDto } from '@app/domain/parameters/email/dto/emailParameter-update.dto';

/**
 * Represents the interface for updating a emailparameter.
 */
export interface UpdateEmailParameterInterface {
  /**
   * Updates a email parameter with the specified ID.
   * @param id - The ID of the email parameter to update.
   * @param updateEmailParameterDto - The data to update the email parameter with.
   * @returns A promise that resolves to the updated email parameter response.
   */
  handle(
    id: number,
    updateEmailParameterDto: EmailParameterUpdateDto,
  ): Promise<EmailParameterResponseDto>;
}
