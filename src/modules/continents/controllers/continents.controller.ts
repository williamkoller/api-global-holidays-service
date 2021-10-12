import { ContinentEntity } from '@/infra/typeorm/entities/continent-entity/continent.entity';
import { Body, Controller, Get, Post } from '@nestjs/common';
import { AddContinentDto } from '@/modules/continents/dtos/add-continent/add-continent.dto';
import { AddContinentService } from '@/modules/continents/services/add-continent/add-continent.service';
import { LoadAllContinentsService } from '@/modules/continents/services/load-all-continents/load-all-continents.service';
import { ContinentOutputType } from '@/modules/continents/types/continent-output.type';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('continents')
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
  public async loadAll(): Promise<ContinentOutputType[]> {
    return await this.loadAllContinentsService.loadAll();
  }
}
