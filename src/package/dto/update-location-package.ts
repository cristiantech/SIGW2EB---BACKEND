import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class UpdateLocationDto {
  @IsString()
  @IsNotEmpty()
  title?: string;

  @IsString()
  @IsNotEmpty()
  latitude?: string;

  @IsString()
  @IsNotEmpty()
  longitude?: string;
}