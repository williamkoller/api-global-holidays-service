import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumberString, IsString } from 'class-validator';

export class AddContinentDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsNumberString()
  @IsNotEmpty()
  territorialExtension: number;

  @ApiProperty()
  @IsNumberString()
  @IsNotEmpty()
  numberOfCountries: number;

  @ApiProperty()
  @IsNumberString()
  @IsNotEmpty()
  population: number;

  @ApiProperty()
  @IsNumberString()
  @IsNotEmpty()
  demographicDensity: number;

  @ApiProperty()
  @IsNumberString()
  @IsNotEmpty()
  urbanPopulation: number;
}
