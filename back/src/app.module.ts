import { Module } from '@nestjs/common';
import { DatabaseModule } from './database/database.module';
import { ProjetoModule } from './projeto/projeto.module';

@Module({
  imports: [
    DatabaseModule,
    ProjetoModule
  ],
})
export class AppModule {}
