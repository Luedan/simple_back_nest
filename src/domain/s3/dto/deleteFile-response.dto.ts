/**
 * The response object for the deleteFile method in the S3 service.
 */
export class DeleteFileResponseDto {
  /**
   * A message indicating the result of the operation.
   */
  message: string;

  /**
   * The key of the file that was deleted.
   */
  key: string;
}
