import { Injectable } from '@nestjs/common';
import { HttpAdapter } from '../httpAdapter/httpAdapter.service';

@Injectable()
export class GetPokemonByName {
  constructor(private readonly _http: HttpAdapter) {
    this._http.initialize({
      baseURL: 'https://pokeapi.co/api/v2',
    });
  }

  async execute(name: string) {
    const response = await this._http.get<any>(`/pokemon/${name}`);

    return response;
  }
}
