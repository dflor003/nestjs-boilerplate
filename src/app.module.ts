import { Module } from '@nestjs/common';
import { LoggerModule } from 'nestjs-pino';
import { AppConfig } from './app.config';
import { ExampleModule } from './modules/features/example/example.module';

@Module({
  imports: [
    // Framework modules
    LoggerModule.forRoot(),

    // Feature modules
    ExampleModule,
  ],
  providers: [AppConfig],
})
export class AppModule {}
