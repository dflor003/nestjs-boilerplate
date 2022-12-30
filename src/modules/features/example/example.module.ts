import { Module } from '@nestjs/common';
import { ExampleController } from './example.controller';

/**
 * Sample HTTP controller module.
 */
@Module({
  controllers: [ExampleController],
})
export class ExampleModule {}
