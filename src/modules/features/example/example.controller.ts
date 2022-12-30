import { Controller, Get } from '@nestjs/common';

@Controller('/api/v1/example')
export class ExampleController {
  @Get()
  getHello() {
    return {
      result: 'Hello World!',
    };
  }
}
