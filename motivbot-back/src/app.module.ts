import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OpenaiController } from './openai/openai.controller';
import { UsersModule } from './users/users.module';
import { OpenaiService } from './openai/openai.service';

@Module({
  imports: [UsersModule],
  controllers: [AppController, OpenaiController],
  providers: [AppService, OpenaiService],
})
export class AppModule {}