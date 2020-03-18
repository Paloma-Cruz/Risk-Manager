import { Module } from '@nestjs/common';
import { ProjetoController } from './projeto.controller';
import { ProjetoService } from './projeto.service';

@Module({
  imports: [],
  controllers: [
      ProjetoController,
  ],
  providers: [
      ProjetoService,
  ]
})
export class ProjetoModule {}
