import { Module } from '@nestjs/common';
import { AutomapperModule } from '@automapper/nestjs';
import { classes } from '@automapper/classes';
import { InfrastructureModule } from '@app/infrastructure/infrastructure.module';
import { SERVICES } from './services';
import { PROFILES } from './profiles';
import { JwtModule } from '@nestjs/jwt';

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
  providers: [...SERVICES, ...PROFILES],
  exports: [...SERVICES],
})
export class ServiceModule {}
