import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import { MessagesController } from './messages.controller';
import { MessagesService } from './messages.service';
import { HttpModule } from '@nestjs/axios';
import { Messages } from './entity/Messages';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseConfiguration } from '../database.configuration';
import { DataSource, DataSourceOptions } from 'typeorm';
import { AppDataSource, typeOrmAsyncConfig } from './data-source';

//  import ormconfig from 'ormconfig.json';
// const defaultOptions = {
//   dialect: 'mysql',
//   port: 3306,
//   username: 'message',
//   password: 'message',
//   database: 'message',
//   synchronize: true,
// };
// const options: DataSourceOptions = {
//   type: 'mysql',
//   host: 'localhost',
//   port: 3306,
//   username: 'message',
//   password: 'message',
//   database: 'message',
//   entities: ['src/entity/**.entity{.ts,.js}'],
//   synchronize: true,
//   migrations: ['dist/migrations/*.js'],
//   // cli: { migrationsDir: 'src/migrations' },
// };
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
