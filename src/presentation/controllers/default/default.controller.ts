import { Controller, Get } from '@nestjs/common';

/**
 * Handles the GET request to the home route.
 * @returns A string with the message "Hello World!".
 */
@Controller()
export class DefaultController {
  constructor() {}

  /**
   * Handles the GET request to the home route.
   * @returns A string with the message "Hello World!".
   */
  @Get()
  home(): string {
    return 'Hello World!';
  }
}
