import { IsNotEmpty, IsNumberString, IsString } from 'class-validator';

export class AddContinentDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumberString()
  @IsNotEmpty()
  territorialExtension: number;

  @IsNumberString()
  @IsNotEmpty()
  numberOfCountries: number;

  @IsNumberString()
  @IsNotEmpty()
  population: number;

  @IsNumberString()
  @IsNotEmpty()
  demographicDensity: number;

  @IsNumberString()
  @IsNotEmpty()
  urbanPopulation: number;
}
