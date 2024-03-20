import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User) private readonly  userRepo: Repository<User>,
  ){}

  create(createUserDto: CreateUserDto) {
    const newUser = this.userRepo.create(createUserDto);
    return this.userRepo.save(newUser);
  }

  async findAll() {
    return this.userRepo.find();
  }

  async findPackagesByUser(userId: number) {
    const user = await this.userRepo.find({
      where: {id: userId},
      relations: ['packages']
    });
    return user;
  }

  async findOne(id: number) {
    const userOne = this.userRepo.findOne({where:{id}});
    if (!userOne) {
      throw new NotFoundException(`this user not exist`);
    }
    return userOne; 
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.findOne(id);
    const  updatedUser = this.userRepo.merge(user ,updateUserDto );
    return this.userRepo.save(updatedUser); 
  }

  async remove(id: number) {
    return await this.userRepo.delete(id);
  }
}
