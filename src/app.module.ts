import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MenuModule } from './menu/menu.module';
import { CountrysModule } from './countrys/countrys.module';
import { GeneroModule } from './genero/genero.module';
import { MarcaModule } from './marca/marca.module';
import { CategoriasModule } from './categorias/categorias.module';

@Module({
  imports: [MenuModule, CountrysModule, GeneroModule, MarcaModule, CategoriasModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
