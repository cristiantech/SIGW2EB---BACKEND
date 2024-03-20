import { Injectable } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Message } from './entities/message.entity';
import { Repository } from 'typeorm';
import { User } from 'src/users/entities/user.entity';
import { Driver } from 'src/drivers/entities/driver.entity';

@Injectable()
export class MessageService {

  constructor(
    @InjectRepository(Message) private readonly messageRepo: Repository<Message>,
    @InjectRepository(User) private readonly userRepo: Repository<User>,
    @InjectRepository(Driver) private readonly driverRepo: Repository<Driver>,
  ) { }

  async create(createMessageDto: CreateMessageDto) {
    const newMessage = this.messageRepo.create(createMessageDto);
    if (createMessageDto.userId) {
      const user = await this.userRepo.findOne({ where: { id: createMessageDto.userId } })
      newMessage.user = user
    }

    if (createMessageDto.driverId) {
      const driver = await this.driverRepo.findOne({ where: { id: createMessageDto.driverId } })
      newMessage.driver = driver;
    }
    return this.messageRepo.save(newMessage);;
  }

  async findMessagesByUser(userId: number) {
    const user = await this.userRepo.findOne(
      {
        where: { id: userId },
        relations: ['messages']
      }
    );
    return user.messages;
  }

  async findMessagesByDriver(driverId: number) {
    const driver = await this.driverRepo.findOne(
      {
        where: { id: driverId },
        relations: ['messages']
      }
    );
    return driver.messages;
  }

}
