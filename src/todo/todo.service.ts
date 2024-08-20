import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Todo } from '@prisma/client';

@Injectable()
export class TodoService {
    constructor(private prisma: PrismaService) { }

    create(data: Todo, userId: number) {
        return this.prisma.todo.create({
            data: {
                ...data,
                userId,
            },
        });
    }

    findAll(userId: number) {
        return this.prisma.todo.findMany({
            where: { userId },
        });
    }

    findOne(id: number, userId: number) {
        return this.prisma.todo.findFirst({
            where: { id, userId },
        });
    }

    update(id: number, data: Todo, userId: number) {
        return this.prisma.todo.updateMany({
            where: { id, userId },
            data,
        });
    }

    remove(id: number, userId: number) {
        return this.prisma.todo.deleteMany({
            where: { id, userId },
        });
    }
}
