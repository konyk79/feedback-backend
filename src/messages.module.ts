import { Module } from '@nestjs/common';
import { MessagesController } from './messages.controller';
import { MessagesService } from './messages.service';
import { HttpModule } from '@nestjs/axios';
import { Messages } from './entities/messages.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
// import ormconfig from 'ormconfig.json';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'message',
      password: 'message',
      database: 'message',
      entities: [Messages],
      synchronize: true,
    }),
    HttpModule,
    TypeOrmModule.forFeature([Messages]),
  ],
  controllers: [MessagesController],
  providers: [MessagesService],
})
export class MessagesModule {}
