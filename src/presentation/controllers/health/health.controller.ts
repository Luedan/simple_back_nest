import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import {
  HealthCheck,
  HealthCheckService,
  HttpHealthIndicator,
  TypeOrmHealthIndicator,
} from '@nestjs/terminus';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

/**
 * Endpoint to check the health of the application.
 * Performs health checks on the HTTP server and the database connection.
 * @returns A promise that resolves to the health check results.
 */
@Controller('health')
@ApiTags('Health')
export class HealthController {
  /**
   * Creates an instance of HealthController.
   * @param _healthCheck - The health check service.
   * @param _http - The HTTP health indicator.
   * @param _db - The TypeORM health indicator.
   * @param _connection - The data source connection.
   */
  constructor(
    private readonly _healthCheck: HealthCheckService,
    private readonly _http: HttpHealthIndicator,
    private readonly _db: TypeOrmHealthIndicator,
    @InjectDataSource('mili') private readonly _connection: DataSource,
  ) {}

  /**
   * Handles the GET request to the /health route.
   * @returns A promise that resolves to the health check results.
   */
  @Get()
  @HealthCheck()
  check() {
    return this._healthCheck.check([
      () => this._http.pingCheck('MAIN API', 'http://localhost:3002/api/'),
      () => this._db.pingCheck('MAIN DB', { connection: this._connection }),
    ]);
  }
}
