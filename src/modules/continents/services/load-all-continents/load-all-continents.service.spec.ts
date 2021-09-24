import { Test, TestingModule } from '@nestjs/testing';
import { LoadAllContinentsService } from './load-all-continents.service';

describe('LoadAllContinents', () => {
  let service: LoadAllContinentsService;

  beforeEach(async () => {
    const continentsServiceMock = {
      addContinent: jest.fn(),
      loadByName: jest.fn(),
      loadAll: jest.fn(),
    };
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        {
          provide: LoadAllContinentsService,
          useFactory: () => continentsServiceMock,
        },
      ],
    }).compile();

    service = module.get<LoadAllContinentsService>(LoadAllContinentsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
