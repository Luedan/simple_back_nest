/* istanbul ignore file */
import { HttpAdapter } from './httpAdapter/httpAdapter.service';
import { GetPokemonByName } from './pokeApi/getPokemonByName.service';

export const EXTERNAL_PROVIDERS = [HttpAdapter, GetPokemonByName];
