import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { SongsService } from './songs.service';

@Controller('songs')
export class SongsController {
  constructor(private songService: SongsService) {}
  @Get()
  findAll() {
    return this.songService.findAll();
  }
  @Get(':id')
  findOne() {
    return 'fetch song based on id';
  }

  @Post()
  create() {
    return this.songService.create('Animals by Martin Garrix');
  }

  @Put(':id')
  update() {
    return 'update song based on id';
  }

  @Delete(':id')
  delete() {
    return 'delete song based on id';
  }
}
