import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { ProjetoModule } from './projeto/projeto.module';
import { UsuarioModule } from './usuario/usuario.module';

@Module({
  imports: [
    DatabaseModule,
    ProjetoModule,
    UsuarioModule
  ],
})
export class AppModule {}
