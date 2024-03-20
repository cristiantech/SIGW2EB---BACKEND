import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateDriverDto } from './dto/create-driver.dto';
import { UpdateDriverDto } from './dto/update-driver.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Driver } from './entities/driver.entity';
import { Repository } from 'typeorm';

@Injectable()
export class DriversService {

  constructor(
    @InjectRepository(Driver) private readonly repoDriver: Repository<Driver>,
  ) { }

   create(createDriverDto: CreateDriverDto) {
    const newDriver = this.repoDriver.create(createDriverDto);
    return this.repoDriver.save(newDriver);
    
  }

  async findAll() {
    return await this.repoDriver.find();
  }

  async findOne(id: number) {
    const driverOne = await this.repoDriver.findOne({where:{id}});
    if (!driverOne) {
      throw new NotFoundException(`this user not exist`);
    }
    return driverOne; 
  }

  async update(id: number, updateDriverDto: UpdateDriverDto) {
    const driver = await this.findOne(id);
    const  updateDriver = this.repoDriver.merge(driver , updateDriverDto );
    return this.repoDriver.save(updateDriver); 
  }

  remove(id: number) {
    return this.repoDriver.delete(id);
  }
}
