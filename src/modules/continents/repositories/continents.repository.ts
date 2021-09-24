import { ContinentEntity } from '@/infra/typeorm/entities/continent-entity/continent.entity';
import { EntityRepository, Repository } from 'typeorm';
import { AddContinentDto } from '../dtos/add-continent/add-continent.dto';

@EntityRepository(ContinentEntity)
export class ContinentsRepository extends Repository<ContinentEntity> {
  public async addContinent(
    addContinentDto: AddContinentDto,
  ): Promise<ContinentEntity> {
    const continentCreated = this.create(addContinentDto);
    return await this.save(continentCreated);
  }

  public async loadByName(name: string): Promise<ContinentEntity> {
    return await this.createQueryBuilder('continents')
      .where('(continents.name ILIKE :name)', { name: `%${name}%` })
      .getOne();
  }

  public async loadById(id: number): Promise<ContinentEntity> {
    return await this.findOne({ where: { id } });
  }
}
