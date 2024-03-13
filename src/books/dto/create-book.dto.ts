import { IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateBookDto {
  @ApiProperty({ description: 'Titulo del libro' })
  @IsString()
  title: string;

  @IsString()
  author: string;

  @IsNumber()
  year: number;
}
