import { IsBoolean, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateNotificationDto {
    @IsNotEmpty()
    @IsString()
    content: string;

    @IsNotEmpty()
    @IsBoolean()
    isRead: boolean;

    @IsNotEmpty()
    @IsNumber()
    userId: number;
}
