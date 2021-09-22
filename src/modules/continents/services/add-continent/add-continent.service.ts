import { ContinentEntity } from '@/infra/typeorm/entities/continent-entity/continent.entity';
import { ConflictException, Injectable } from '@nestjs/common';
import { AddContinentDto } from '../../dtos/add-continent/add-continent.dto';
import { ContinentsRepository } from '../../repositories/continents.repository';

@Injectable()
export class AddContinentService {
  constructor(private readonly continentsRepo: ContinentsRepository) {}

  public async addContinent(
    addContinentDto: AddContinentDto,
  ): Promise<ContinentEntity> {
    const continentExists = await this.continentsRepo.loadByName(
      addContinentDto.name,
    );

    if (continentExists) {
      throw new ConflictException(
        'There is already a continent with that name.',
      );
    }
    return await this.continentsRepo.addContinent(addContinentDto);
  }
}
