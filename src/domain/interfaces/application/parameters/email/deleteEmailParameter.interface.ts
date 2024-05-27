import { EmailParameterResponseDto } from '@app/domain/parameters/email/dto/emailParameter-response.dto';

/**
 * Represents the interface for deleting a emailParameter.
 */
export interface DeleteEmailParameterInterface {
  /**
   * Handles the deletion of a emailParameter.
   * @param id - The ID of the emailParameter to be deleted.
   * @returns A promise that resolves to a EmailParameterResponseDto.
   */
  handle(id: number): Promise<EmailParameterResponseDto>;
}
