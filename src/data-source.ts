import { TypeOrmModuleAsyncOptions, TypeOrmModuleOptions } from '@nestjs/typeorm';
import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Messages } from './entity/Messages';
import { message1666188210817 } from './migration/1666188210817-message';

export const AppDataSource = new DataSource({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'message',
  password: 'message',
  database: 'message',
  synchronize: false,
  logging: false,
  entities: [Messages],
  migrations: [message1666188210817],
  subscribers: [],
});
export const typeOrmAsyncConfig: TypeOrmModuleAsyncOptions = {
  // imports: [ConfigModule],
  // inject: [ConfigService],
  useFactory: async (): Promise<TypeOrmModuleOptions> => {
    return {
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'message',
      password: 'message',
      database: 'message',
      synchronize: false,
      logging: false,
      entities: [Messages],
      migrations: [message1666188210817],
      subscribers: [],
    };
  },
};