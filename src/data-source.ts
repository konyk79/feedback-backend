import {
  TypeOrmModuleAsyncOptions,
  TypeOrmModuleOptions,
} from '@nestjs/typeorm';
import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Messages } from './entity/Messages';
import { MessagePG1666200920699 } from './migration/1666200920699-MessagePG';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'ec2-44-210-228-110.compute-1.amazonaws.com',
  database: 'd36rnke2dvt7ji',
  port: 5432,
  password: '921eb4fd329d33938b0adef8309ce53a0683e15fc4c6f47c4808432548eefd9c',
  url: 'postgres://idvlhvisqfmprg:921eb4fd329d33938b0adef8309ce53a0683e15fc4c6f47c4808432548eefd9c@ec2-44-210-228-110.compute-1.amazonaws.com:5432/d36rnke2dvt7ji',
  ssl: {
    rejectUnauthorized: false,
  },
  synchronize: false,
  entities: [Messages],
  migrations: [MessagePG1666200920699],
  subscribers: [],
});
export const typeOrmAsyncConfig: TypeOrmModuleAsyncOptions = {
  useFactory: async (): Promise<TypeOrmModuleOptions> => {
    return {
      type: 'postgres',
      host: 'ec2-44-210-228-110.compute-1.amazonaws.com',
      database: 'd36rnke2dvt7ji',
      port: 5432,
      password:
        '921eb4fd329d33938b0adef8309ce53a0683e15fc4c6f47c4808432548eefd9c',
      url: 'postgres://idvlhvisqfmprg:921eb4fd329d33938b0adef8309ce53a0683e15fc4c6f47c4808432548eefd9c@ec2-44-210-228-110.compute-1.amazonaws.com:5432/d36rnke2dvt7ji',
      ssl: {
        rejectUnauthorized: false,
      },
      synchronize: false,
      entities: [Messages],
      migrations: [MessagePG1666200920699],
      subscribers: [],
    };
  },
};
