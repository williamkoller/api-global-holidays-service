import { ContinentEntity } from '@/infra/typeorm/entities/continent-entity/continent.entity';
import { EntityRepository, Repository } from 'typeorm';
import { AddContinentDto } from '../dtos/add-continent/add-continent.dto';

@EntityRepository(ContinentEntity)
export class ContinentsRepository extends Repository<ContinentEntity> {
  public async addContinent(
    addContinentDto: AddContinentDto,
  ): Promise<ContinentEntity> {
    const continentCreated = Object.assign(
      {} as ContinentEntity,
      addContinentDto,
    );
    return await this.save(continentCreated);
  }
}
