import { ContinentEntity } from '@/infra/typeorm/entities/continent-entity/continent.entity';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { AddContinentDto } from '../dtos/add-continent/add-continent.dto';
import { AddContinentService } from '../services/add-continent/add-continent.service';
import { LoadAllContinentsService } from '../services/load-all-continents/load-all-continents.service';

@Controller('continents')
export class ContinentsController {
  constructor(
    private readonly addContinentService: AddContinentService,
    private readonly loadAllContinentsService: LoadAllContinentsService,
  ) {}

  @Post()
  public async addContinent(
    @Body() addContinentDto: AddContinentDto,
  ): Promise<ContinentEntity> {
    return await this.addContinentService.addContinent(addContinentDto);
  }

  @Get()
  public async loadAll(): Promise<ContinentEntity[]> {
    return await this.loadAllContinentsService.loadAll();
  }
}
