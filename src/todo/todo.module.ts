import { Module } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoController } from './todo.controller';
import { PrismaModule } from '../prisma/prisma.module'; // Importando o PrismaModule

@Module({
  imports: [PrismaModule], // Certifique-se de importar o PrismaModule aqui
  providers: [TodoService],
  controllers: [TodoController],
})
export class TodoModule { }
