import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MenuModule } from './menu/menu.module';
import { CountrysModule } from './countrys/countrys.module';

@Module({
  imports: [MenuModule, CountrysModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
