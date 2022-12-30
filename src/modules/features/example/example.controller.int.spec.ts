import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { ExampleModule } from './example.module';

describe('ExampleController (Integration)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [ExampleModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('should respond with 200', async () => {
    // Act
    const response = await request(app.getHttpServer())
      .get('/api/v1/example')
      .expect(200);

    // Assert
    expect(response.body).toEqual({
      result: 'Hello World!',
    });
  });
});
