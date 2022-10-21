import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { MessagesController } from './messages.controller';
import { MessagesService } from './messages.service';
import { HttpModule } from '@nestjs/axios';
import { Messages } from './entity/Messages';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppDataSource, typeOrmAsyncConfig } from './data-source';
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    // TypeOrmModule.forRoot(AppDataSource.options),
    TypeOrmModule.forRootAsync(typeOrmAsyncConfig),
    HttpModule,
    TypeOrmModule.forFeature([Messages]),
  ],
  controllers: [MessagesController],
  providers: [MessagesService],
})
export class MessagesModule {}
