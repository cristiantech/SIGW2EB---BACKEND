import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreatePackageDto {
    @IsNotEmpty()
    @IsString()
    trackingNumber: string;

    @IsNotEmpty()
    @IsString()
    title: string;

    @IsNotEmpty()
    @IsString()
    source: string;

    @IsNotEmpty()
    @IsString()
    address: string;

    @IsOptional()
    @IsString()
    state: string;

    @IsString()
    @IsOptional()
    latitude: string;

    @IsString()
    @IsOptional()
    longitude: string;

    @IsNumber()
    userId: number;
}
