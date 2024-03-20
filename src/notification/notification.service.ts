import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { MailerService } from '@nestjs-modules/mailer';

import { CreateNotificationDto } from './dto/create-notification.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../users/entities/user.entity';
import { Notification } from './entities/notification.entity';

@Injectable()
export class NotificationService {

  constructor(
    @InjectRepository(Notification) private readonly  notificationRepo: Repository<Notification>,
    @InjectRepository(User) private readonly  userRepo: Repository<User>,
    private readonly mailerService: MailerService
  ) {}

  async createNotification(createNotificationDto: CreateNotificationDto) {
    const notification = this.notificationRepo.create(createNotificationDto);
    if (createNotificationDto.userId) {
      const user = await this.userRepo.findOne({ where: {id: createNotificationDto.userId }});
      await this.mailerService.sendMail({
        //mailtrap
        to: user.mail,
        subject: 'Confirmación de Entrega',
        html: 'Producto Entregado', // Nombre de la plantilla (sin la extensión .hbs)

      });
      notification.user = user;
    }
  
    return this.notificationRepo.save(notification);
  }

  async getNotificationsForUser(userId: number) {
    return this.notificationRepo.find({
      where: { user: { id: userId } },
      order: { id: 'DESC' }, 
    });
  }

  async markNotificationAsRead(notificationId: number){
    const notification = await this.notificationRepo.findOne({where: {id: notificationId}});
    if (notification) {
      notification.isRead = true;
      await this.notificationRepo.save(notification);
    }
  }


  
}
