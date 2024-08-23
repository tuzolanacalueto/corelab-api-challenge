// update-todo.dto.ts
import { IsOptional, IsBoolean, IsString } from 'class-validator';

export class UpdateTodoDto {
    @IsOptional()
    @IsString()
    title?: string;

    @IsOptional()
    @IsString()
    content: string;

    @IsOptional()
    @IsBoolean()
    isFavorite?: boolean;

    @IsOptional()
    @IsString()
    color?: string;
}
