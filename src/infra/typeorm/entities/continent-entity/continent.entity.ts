import { BaseEntity } from '@/infra/typeorm/entities/base-entity/base-entity';
import { Column, Entity } from 'typeorm';

@Entity('continents')
export class ContinentEntity extends BaseEntity {
  @Column({ type: 'varchar', nullable: false })
  name: string;

  @Column({ type: 'int4', nullable: false })
  territorialExtension: number;

  @Column({ type: 'int4', nullable: false })
  totalCountries: number;

  @Column({ type: 'int4', nullable: false })
  population: number;

  @Column({ type: 'int4', nullable: false })
  demographicDensity: number;

  @Column({ type: 'int4', nullable: false })
  urbanPopulation: number;

  constructor(partial: Partial<ContinentEntity>) {
    super();
    Object.assign(this, partial);
  }
}
