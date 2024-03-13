import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly repoUser: Repository<User>,
  ) {}

  create(payload: CreateUserDto) {
    const newUser = this.repoUser.create(payload);
    return this.repoUser.save(newUser);
  }

  async findAll() {
    const users = await this.repoUser.find();
    return users;
  }

  async findOne(id: number) {
    const usersOne = await this.repoUser.findOne({ where: { idClient: id } });
    if (!usersOne)
      throw new NotFoundException(`User with ID "${id}" not found`);
    return usersOne;
  }

  async update(id: number, change: UpdateUserDto) {
    const user = await this.findOne(id);
    this.repoUser.merge(user, change);
    return this.repoUser.save(user);
  }

  remove(id: number) {
    return this.repoUser.delete(id);
  }
}
