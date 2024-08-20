import { Controller, Post, Body, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post('register')
    async register(@Body('email') email: string, @Body('password') password: string) {
        return this.authService.register(email, password);
    }

    @Post('login')
    async login(@Body('email') email: string, @Body('password') password: string) {
        const user = await this.authService.validateUser(email, password);
        if (!user) {
            return { message: 'Invalid credentials' };
        }
        return this.authService.login(user);
    }

    @UseGuards(JwtAuthGuard)
    @Post('logout')
    async logout(@Request() req) {
        // Você pode implementar a lógica de logout, como invalidar o token.
        return { message: 'Logout successful' };
    }
}
