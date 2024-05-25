/* istanbul ignore file */
import { Module } from '@nestjs/common';
import { AutomapperModule } from '@automapper/nestjs';
import { classes } from '@automapper/classes';
import { InfrastructureModule } from '@app/infrastructure/infrastructure.module';
import { JwtModule } from '@nestjs/jwt';
import { USE_CASES } from './useCases';
import { PROFILES } from './profiles';

@Module({
  imports: [
    InfrastructureModule,
    AutomapperModule.forRoot({
      strategyInitializer: classes(),
    }),
    JwtModule.register({
      secret: 'test-key',
      global: true,
      signOptions: {
        expiresIn: '30m',
      },
    }),
  ],
  providers: [...USE_CASES, ...PROFILES],
  exports: [...USE_CASES],
})
export class ApplicationModule {}
