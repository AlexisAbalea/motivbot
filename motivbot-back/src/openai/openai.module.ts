import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/database/database.module';
import { lettreProviders } from 'src/repositories/lettre.repository';
import { userProviders } from 'src/repositories/users.repository';
import { UsersService } from 'src/users/users.service';
import { OpenaiController } from './openai.controller';
import { OpenaiService } from './openai.service';

@Module({
  imports: [DatabaseModule],
  controllers: [OpenaiController],
  providers: [OpenaiService, ...lettreProviders, UsersService, ...userProviders]
})
export class OpenaiModule {}
