import { Injectable } from '@nestjs/common';

// TODO: Better config with YML files and such
@Injectable()
export class AppConfig {
  readonly name: string;
  readonly version: string;
  readonly description: string;
  readonly port: number = 3000;
}
