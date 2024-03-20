import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, Put } from '@nestjs/common';
import { PackageService } from './package.service';
import { CreatePackageDto } from './dto/create-package.dto';
import { UpdatePackageDto } from './dto/update-package.dto';
import { UpdateLocationDto } from './dto/update-location-package';

@Controller('packages')
export class PackageController {
  constructor(private readonly packageService: PackageService) {}

  @Post()
  create(@Body() createPackageDto: CreatePackageDto) {
    return this.packageService.create(createPackageDto);
  }

  @Get()
  findAll() {
    return this.packageService.findAll();
  }

  @Get('/trackingpack')
  findInPackagesInProgress() {
    return this.packageService.findInPackagesInProgress();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.packageService.findOne(id);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updatePackageDto: UpdatePackageDto) {
    return this.packageService.update(id, updatePackageDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.packageService.remove(id);
  }

  @Put('/ubication/:id')
  updateLocation(@Param('id', ParseIntPipe) id: number, @Body() updatePackageDto: UpdateLocationDto) {
    return this.packageService.updateLocation(id, updatePackageDto);
  }
  



}
