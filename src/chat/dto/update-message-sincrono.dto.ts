import { PartialType } from '@nestjs/mapped-types';
import { CreateMessageSincronoDto } from './create-message-sincrono.dto';

export class UpdateMessageSincronoDto extends PartialType(CreateMessageSincronoDto) {
  id: number;
}
