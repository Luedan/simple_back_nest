/* istanbul ignore file */
import { SendEmail } from './email/sendEmail.service';
import { SendEmailByParameterId } from './email/sendEmailByParameterId.service';
import { HttpAdapter } from './httpAdapter/httpAdapter.service';
import { GetPokemonByName } from './pokeApi/getPokemonByName.service';
import { DeleteFileS3 } from './s3/deleteFileS3.service';
import { GetFileS3 } from './s3/getFileS3.service';
import { PutFileS3 } from './s3/putFileS3.service';

/**
 * External providers
 */
export const EXTERNAL_PROVIDERS = [
  HttpAdapter,
  GetPokemonByName,
  SendEmail,
  SendEmailByParameterId,
  PutFileS3,
  GetFileS3,
  DeleteFileS3,
];
