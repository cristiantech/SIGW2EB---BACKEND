import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, Put } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { UpdateNotificationDto } from './dto/update-notification.dto';

@Controller('notification')
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @Post()
  create(@Body() createNotificationDto: CreateNotificationDto) {
    return this.notificationService.createNotification(createNotificationDto);
  }

 
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.notificationService.getNotificationsForUser(id);
  }

  @Put('/changestate:id')
  update(@Param('id') id: number) {
    return this.notificationService.markNotificationAsRead(id);
  }


}
