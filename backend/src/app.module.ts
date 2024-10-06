import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InstagramModule } from './instagram/instagram.module';
import { TelegramModule } from './telegram/telegram.module';

@Module({
  imports: [InstagramModule, TelegramModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
