import { Controller, Get } from '@nestjs/common';
import { ProjetoService } from './projeto.service';

// Controller é a porta de entrada, onde tem os endPoints 

@Controller()
export class ProjetoController {
  constructor(private readonly projetoService: ProjetoService) {}

  @Get('projeto')
  getHello(): string {
    return this.projetoService.getHello();
  }
}
