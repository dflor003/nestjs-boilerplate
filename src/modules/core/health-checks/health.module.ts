import { DynamicModule, Module } from '@nestjs/common';
import { TerminusModule } from '@nestjs/terminus';
import { HealthController } from './health.controller';

@Module({
  imports: [],
  controllers: [HealthController],
})
export class HealthModule {
  static forRoot(): DynamicModule {
    return {
      module: HealthModule,
      imports: [TerminusModule.forRoot()],
    };
  }
}
