import { Body, Controller, Get, Post, Patch, Param, Delete } from '@nestjs/common';
import { CreateCatDto } from './dto/create-cat.dto';

@Controller('animals')
export class AnimalsController {
  @Post('cats')
  createCat(@Body() createCatDto: CreateCatDto): string {
    return `This action adds a new cat named ${createCatDto.name}`;
  }

  @Post('mice')
  createMouse(@Body() mouseData: any): string {
    return 'This action adds a new mouse';
  }

  @Get('cats/:id')
  findOneCat(@Param('id') id: string): string {
    return `This action returns cat with ID #${id}`;
  }

  @Get('mice/:id')
  findOneMouse(@Param('id') id: string): string {
    return `This action returns mouse with ID #${id}`;
  }

  @Get('cats')
  findAllCats(): string {
    return 'This action returns all cats';
  }

  @Get('mice')
  findAllMice(): string {
    return 'This action returns all mice';
  }

  @Patch('cats/:id')
  updateCat(@Param('id') id: string, @Body() updateCatDto: CreateCatDto): string {
    return `This action updates cat with ID #${id}`;
  }

  @Patch('mice/:id')
  updateMouse(@Param('id') id: string, @Body() mouseData: any): string {
    return `This action updates mouse with ID #${id}`;
  }

  @Delete('cats/:id')
  removeCat(@Param('id') id: string): string {
    return `This action removes cat with ID #${id}`;
  }

  @Delete('mice/:id')
  removeMouse(@Param('id') id: string): string {
    return `This action removes mouse with ID #${id}`;
  }
}
