import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { MessageService } from './message.service';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';

@Controller('message')
export class MessageController {
  constructor(private readonly messageService: MessageService) {}

  @Post()
  create(@Body() createMessageDto: CreateMessageDto) {
    return this.messageService.create(createMessageDto);
  }


  @Get('users/:id')
  findMessagesByUser(@Param('id', ParseIntPipe) id: number) {
    return this.messageService.findMessagesByUser(id);
  }
  
  @Get('drivers/:id')
  findMessagesByDriver(@Param('id', ParseIntPipe) id: number) {
    return this.messageService.findMessagesByDriver(id);
  }
 
}
