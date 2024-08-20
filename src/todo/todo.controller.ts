import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { TodoService } from './todo.service';
import { Todo } from '@prisma/client';

@Controller('todos')
@UseGuards(JwtAuthGuard)
export class TodoController {
    constructor(private readonly todoService: TodoService) { }

    @Post()
    create(@Body() todo: Todo, @Request() req) {
        return this.todoService.create(todo, req.user.userId);
    }

    @Get()
    findAll(@Request() req) {
        return this.todoService.findAll(req.user.userId);
    }

    @Get(':id')
    findOne(@Param('id') id: string, @Request() req) {
        return this.todoService.findOne(+id, req.user.userId);
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() todo: Todo, @Request() req) {
        return this.todoService.update(+id, todo, req.user.userId);
    }

    @Delete(':id')
    remove(@Param('id') id: string, @Request() req) {
        return this.todoService.remove(+id, req.user.userId);
    }
}
