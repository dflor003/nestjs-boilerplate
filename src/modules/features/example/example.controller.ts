import { Controller, Get } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('example')
@Controller('/api/v1/example')
export class ExampleController {
  @ApiOkResponse({
    description: 'Returns Hello World!',
  })
  @Get()
  getHello() {
    return {
      result: 'Hello World!',
    };
  }
}
