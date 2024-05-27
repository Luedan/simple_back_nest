import { EmailParameterResponseDto } from '@app/domain/parameters/email/dto/emailParameter-response.dto';

/**
 * Interface for the "findAll" method of the EmailParameter service.
 */
export interface FindAllEmailParameterInterface {
  /**
   * Retrieves all emailParameters.
   * @returns A promise that resolves to an array of EmailParameterResponseDto objects.
   */
  handle(): Promise<EmailParameterResponseDto[]>;
}
