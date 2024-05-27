import { EmailParameterRequestDto } from '@app/domain/parameters/email/dto/emailParameter-request.dto';
import { EmailParameterResponseDto } from '@app/domain/parameters/email/dto/emailParameter-response.dto';

/**
 * Represents the interface for creating a emailParameter.
 */
export interface CreateEmailParameterInterface {
  /**
   * Handles the creation of a emailParameter.
   *
   * @param emailParameterRequestDto - The data transfer object containing the emailParameter details.
   * @returns A promise that resolves to the response containing the created emailParameter.
   */
  handle(
    emailParameterRequestDto: EmailParameterRequestDto,
  ): Promise<EmailParameterResponseDto>;
}
