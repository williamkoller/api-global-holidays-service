import { PartialType } from '@nestjs/swagger';
import { AddContinentDto } from '@/modules/continents/dtos/add-continent/add-continent.dto';

export class UpdateContinentDto extends PartialType(AddContinentDto) {}
