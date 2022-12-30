import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  ServiceUnavailableException,
} from '@nestjs/common';
import { ApiNoContentResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import {
  HealthCheck,
  HealthCheckService,
  HealthIndicatorFunction,
} from '@nestjs/terminus';

/**
 * Health check controller based off the
 * [Terminus](https://docs.nestjs.com/recipes/terminus) health check framework.
 * Register one or more health checks to get started
 */
@ApiTags('health')
@Controller('_manage/health')
export class HealthController {
  private readonly indicators: HealthIndicatorFunction[];

  constructor(private readonly health: HealthCheckService) {
    this.indicators = [
      // Add any health checks here
    ];
  }

  @ApiOkResponse({
    description: `Returns the health status of the application`,
  })
  @HealthCheck()
  @Get()
  async status() {
    return await this.health.check(this.indicators);
  }

  /**
   * Meant to be used along with K8S liveness probes.
   * https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/
   */
  @ApiNoContentResponse({
    description: [
      `Checks if the service is alive and able to pass all health checks.`,
      'It will either return a 204 No Content if all checks pass or throw an error if any fail.',
    ].join(' '),
  })
  @HttpCode(HttpStatus.NO_CONTENT)
  @Get('/liveness')
  async isAlive(): Promise<void> {
    const result = await this.status();
    if (result?.status === 'ok') {
      return undefined;
    } else {
      throw new ServiceUnavailableException('One or more health checks failed');
    }
  }

  /**
   * Meant to be used along with K8S readiness probes.
   * Add any logic here to check if your app should start serving requests.
   * https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/
   */
  @ApiNoContentResponse({
    description: `Checks if the service is ready to serve requests.`,
  })
  @HttpCode(HttpStatus.NO_CONTENT)
  @Get('/readiness')
  async isReady() {
    return await this.isAlive();
  }
}
