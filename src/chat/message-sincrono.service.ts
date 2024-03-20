import { Injectable } from '@nestjs/common';
import { CreateMessageSincronoDto } from './dto/create-message-sincrono.dto';
import { UpdateMessageSincronoDto } from './dto/update-message-sincrono.dto';

@Injectable()
export class MessageSincronoService {
  create(createMessageSincronoDto: CreateMessageSincronoDto) {
    return 'This action adds a new messageSincrono';
  }

  findAll() {
    return `This action returns all messageSincrono`;
  }

  findOne(id: number) {
    return `This action returns a #${id} messageSincrono`;
  }

  update(id: number, updateMessageSincronoDto: UpdateMessageSincronoDto) {
    return `This action updates a #${id} messageSincrono`;
  }

  remove(id: number) {
    return `This action removes a #${id} messageSincrono`;
  }
}
