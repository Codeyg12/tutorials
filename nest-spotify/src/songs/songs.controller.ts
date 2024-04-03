import { Controller, Delete, Get, Put } from '@nestjs/common';

@Controller('songs')
export class SongsController {
    @Get()
    findAll() {
        return 'Find all songs'
    }
    @Get(':id')
    findOne() {
        return 'fetch song based on id'
    }

    @Put(':id')
    update() {
        return 'update song based on id'
    }

    @Delete(':id')
    delete() {
        return 'delete song based on id'
    }
}
