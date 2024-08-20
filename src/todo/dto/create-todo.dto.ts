// create-todo.dto.ts
import { IsNotEmpty, IsOptional, IsBoolean, IsString, IsInt } from 'class-validator';

export class CreateTodoDto {
    @IsNotEmpty()
    @IsString()
    title: string;

    @IsOptional()
    @IsBoolean()
    isFavorite?: boolean;

    @IsOptional()
    @IsString()
    color?: string;

    @IsNotEmpty()
    @IsInt()
    userId: number;  // Relaciona o todo com o usuário
}
