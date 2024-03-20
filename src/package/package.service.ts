import { Injectable, NotFoundException } from '@nestjs/common';
import { CreatePackageDto } from './dto/create-package.dto';
import { UpdatePackageDto } from './dto/update-package.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Package } from './entities/package.entity';
import { Repository } from 'typeorm';
import { User } from '../users/entities/user.entity';
import { UpdateLocationDto } from './dto/update-location-package';

@Injectable()
export class PackageService {
  constructor(
    @InjectRepository(Package) private readonly  packageRepo: Repository<Package>,
    @InjectRepository(User) private readonly  userRepo : Repository<User>
  ){}
  async create(createPackageDto: CreatePackageDto) {
    const newPackage = this.packageRepo.create(createPackageDto);
    if (createPackageDto.userId) {
      const user = await this.userRepo.findOne({where: {id: createPackageDto.userId}});
      newPackage.user = user;
    }
    return this.packageRepo.save(newPackage);
  }

  async findAll() {
    return this.packageRepo.find({
      relations: ['user']
    });
  }
  
  async findOne(id: number) {
    const user = await this.packageRepo.findOne({ where: { id } });
    if (!user) { throw new NotFoundException('  No se encontro el paquete')};
    return user
  }

  async update(id: number, updatePackageDto: UpdatePackageDto) {
    const pack = await this.packageRepo.findOne({where: {id}});

    if (updatePackageDto.trackingNumber) {
      pack.trackingNumber = updatePackageDto.trackingNumber;
    }
  
    if (updatePackageDto.userId) {
      const user = await this.userRepo.findOne({where: {id: updatePackageDto.userId}});
      pack.user = user;
    }
  
    return this.packageRepo.save(pack);
  }

  async remove(id: number) {
    return await this.packageRepo.delete(id);
  }

  async updateLocation(id: number, updateLocationDto: UpdateLocationDto) {
    const pack = await this.packageRepo.findOne({where: {id: id}});
  
    if (updateLocationDto.latitude) {
      pack.latitude = updateLocationDto.latitude;
    }
  
    if (updateLocationDto.longitude) {
      pack.longitude = updateLocationDto.longitude;
    }
  
    return this.packageRepo.save(pack);
  }

  async findInPackagesInProgress(){
    return await this.packageRepo.find({
      where: {
        state: 'en-progreso'
      }
    });
  }
}
