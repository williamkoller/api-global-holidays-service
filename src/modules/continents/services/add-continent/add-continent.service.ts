import { ContinentEntity } from '@/infra/typeorm/entities/continent-entity/continent.entity';
import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { AddContinentDto } from '../../dtos/add-continent/add-continent.dto';
import { ContinentsRepository } from '../../repositories/continents.repository';

@Injectable()
export class AddContinentService {
  constructor(private readonly continentsRepo: ContinentsRepository) {}

  public async addContinent(
    addContinentDto: AddContinentDto,
  ): Promise<ContinentEntity> {
    throw new InternalServerErrorException();
  }
}
