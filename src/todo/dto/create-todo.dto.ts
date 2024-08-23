// create-todo.dto.ts
import { IsNotEmpty, IsOptional, IsBoolean, IsString } from 'class-validator';

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
}
