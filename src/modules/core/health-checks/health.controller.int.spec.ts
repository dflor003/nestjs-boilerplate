import { HttpStatus, INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { HealthModule } from './health.module';

describe('HealthController (Integration)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [HealthModule.forRoot()],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  describe('status', () => {
    it('should return OK', async () => {
      // Act
      const response = await request(app.getHttpServer())
        .get('/_manage/health')
        .expect(HttpStatus.OK);

      // Assert
      expect(response.body).toEqual({
        status: 'ok',
        details: {},
        error: {},
        info: {},
      });
    });
  });

  describe('liveness', () => {
    it('should return NO CONTENT', async () => {
      // Act
      const response = await request(app.getHttpServer())
        .get('/_manage/health/liveness')
        .expect(HttpStatus.NO_CONTENT);

      // Assert
      expect(response.body).toEqual({});
    });
  });

  describe('readiness', () => {
    it('should return NO CONTENT', async () => {
      // Act
      const response = await request(app.getHttpServer())
        .get('/_manage/health/readiness')
        .expect(HttpStatus.NO_CONTENT);

      // Assert
      expect(response.body).toEqual({});
    });
  });
});
