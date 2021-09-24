import { ContinentEntity } from '@/infra/typeorm/entities/continent-entity/continent.entity';
import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { AddContinentDto } from '../dtos/add-continent/add-continent.dto';
import { AddContinentService } from '../services/add-continent/add-continent.service';

@Controller('continents')
export class ContinentsController {
  constructor(private readonly addContinentService: AddContinentService) {}

  @Post()
  public async addContinent(
    @Body() addContinentDto: AddContinentDto,
  ): Promise<ContinentEntity> {
    throw new BadRequestException();
  }
}
