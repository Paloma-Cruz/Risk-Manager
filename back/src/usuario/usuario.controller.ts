import { Controller, Get, Post, Body } from "@nestjs/common";
import { UsuarioService } from "./usuario.service";
import { AuthDto } from './auth.dto';

@Controller()
export class UsuarioController{
    constructor(private readonly usuarioService: UsuarioService) {}
        
    @Post('auth')
    async authentication(@Body() authDto: AuthDto){
        if(!authDto.token){
            throw Error('Token vazio');
        }
        this.usuarioService.authentication(authDto.token);
        
    }
}