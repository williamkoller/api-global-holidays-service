import { ContinentEntity } from '@/infra/typeorm/entities/continent-entity/continent.entity';
import { ConflictException, Injectable } from '@nestjs/common';
import { AddContinentDto } from '@/modules/continents/dtos/add-continent/add-continent.dto';
import { ContinentsRepository } from '@/modules/continents/repositories/continents.repository';

@Injectable()
export class AddContinentService {
  constructor(private readonly continentsRepo: ContinentsRepository) {}

  public async addContinent(
    addContinentDto: AddContinentDto,
  ): Promise<ContinentEntity> {
    const continent = await this.continentsRepo.loadByName(
      addContinentDto.name,
    );

    if (continent) {
      throw new ConflictException();
    }

    return await this.continentsRepo.addContinent(addContinentDto);
  }
}
