/* istanbul ignore file */
import { SendEmail } from './email/sendEmail.service';
import { SendEmailByParameterId } from './email/sendEmailByParameterId.service';
import { HttpAdapter } from './httpAdapter/httpAdapter.service';
import { GetPokemonByName } from './pokeApi/getPokemonByName.service';

/**
 * External providers
 */
export const EXTERNAL_PROVIDERS = [
  HttpAdapter,
  GetPokemonByName,
  SendEmail,
  SendEmailByParameterId,
];
