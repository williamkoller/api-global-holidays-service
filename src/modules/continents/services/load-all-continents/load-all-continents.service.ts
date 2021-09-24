import { ContinentEntity } from '@/infra/typeorm/entities/continent-entity/continent.entity';
import { BadRequestException, Injectable } from '@nestjs/common';

@Injectable()
export class LoadAllContinentsService {
  public async loadAll(): Promise<ContinentEntity> {
    throw new BadRequestException();
  }
}
