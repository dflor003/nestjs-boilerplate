import { Test } from '@nestjs/testing';
import { ExampleController } from './example.controller';

describe('ExampleController', () => {
  let controller: ExampleController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      imports: [],
      providers: [ExampleController],
    }).compile();

    controller = module.get(ExampleController);
  });

  it('should return hello', () => {
    // Act
    const result = controller.getHello();

    // Assert
    expect(result).toEqual({
      result: 'Hello World!',
    });
  });
});
