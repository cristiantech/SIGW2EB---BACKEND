import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly repoUser: Repository<User>,
  ) { }

  async create(payload: CreateUserDto) {
    const { name, email } = payload;
    let existingUser: User;
    try {
      existingUser =
        email && (existingUser = await this.repoUser.findOne({ where: { email}}))
          ? existingUser
          : null;
    } catch (error) {
      throw new NotFoundException(`Not found: ${error}`);
    }
    if (existingUser) {
      if (email && existingUser.email === email) {
        throw new ConflictException('Email is already in use');
      }
    }
    try {
      const newUser = this.repoUser.create(payload);
      return this.repoUser.save(newUser);
    } catch (error) {
      throw new NotFoundException(`Not found: ${error}`);
    }
  }

  async findAll() {
    const users = await this.repoUser.find();
    return users;
  }

  async findOne(id: number) {
    const usersOne = await this.repoUser.findOne({ where: { idUser: id } });
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
