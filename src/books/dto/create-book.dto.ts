import { IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateBookDto {
  @ApiProperty({ description: 'Titulo del libro' })

  @IsString()
  readonly title: string;

  @IsString()
  readonly author: string;

  @IsNumber()
  readonly year: number;
}
