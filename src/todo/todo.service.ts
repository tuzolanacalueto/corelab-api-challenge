import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

@Injectable()
export class TodoService {
    constructor(private prisma: PrismaService) { }

    create(data: CreateTodoDto) {
        return this.prisma.todo.create({
            data: {
                ...data,
            },
        });
    }

    findAll() {
        return this.prisma.todo.findMany();
    }

    findOne(id: number) {
        return this.prisma.todo.findFirst({
            where: { id },
        });
    }

    update(id: number, data: UpdateTodoDto) {
        return this.prisma.todo.update({
            where: { id },
            data,
        });
    }

    remove(id: number) {
        return this.prisma.todo.deleteMany({
            where: { id },
        });
    }
}
