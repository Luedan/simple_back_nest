import { EmailParameterResponseDto } from '@app/domain/parameters/email/dto/emailParameter-response.dto';

/**
 * Represents the interface for finding a single email parameter item.
 */
export interface FindOneEmailParameterInterface {
  /**
   * Finds a email parameter item by its ID.
   * @param id - The ID of the email parameter item.
   * @returns A promise that resolves to a EmailParameterResponseDto object representing the found emailparameter item.
   */
  handle(id: number): Promise<EmailParameterResponseDto>;
}
