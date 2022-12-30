import { PinoLogger } from 'nestjs-pino';
import { AppConfig } from './app.config';
import { buildServer } from './server';

export async function main() {
  const server = await buildServer();
  const config = server.get(AppConfig);
  const port = config.port;
  await server.listen(port);

  const log = await server.resolve(PinoLogger);
  log.setContext('Main');
  log.info(`Began listening on port ${port}`);
}

// eslint-disable-next-line no-console
main().catch(err => console.error('Error in startup:', err));
