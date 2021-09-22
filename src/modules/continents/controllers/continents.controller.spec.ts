import { Test, TestingModule } from '@nestjs/testing';
import { ContinentsController } from './continents.controller';

describe('ContinentsController', () => {
  let controller: ContinentsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ContinentsController],
    }).compile();

    controller = module.get<ContinentsController>(ContinentsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
