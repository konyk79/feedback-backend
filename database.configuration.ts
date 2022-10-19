import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
export class DatabaseConfiguration implements TypeOrmOptionsFactory {
  createTypeOrmOptions(): TypeOrmModuleOptions | Promise<TypeOrmModuleOptions> {
    return {
      type: 'mysql',
      host: process.env.MYSQL_HOST,
      port: parseInt(process.env.MYSQL_PORT, 10) || 5432,
      username: process.env.MYSQL_USERNAME,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,

      entities: [process.env.TYPEORM_ENTITIES],
      logging: true,
      synchronize: false,
      // migrations: [process.env.TYPEORM_MIGRATIONS],
      // cli: {
      //   migrationsDir: process.env.TYPEORM_MIGRATIONS_DIR,
      // },
      migrations: [process.env.TYPEORM_MIGRATIONS],
      migrationsTableName: 'custom_migration_table',
      // cli: {
      //   migrationsDir: process.env.TYPEORM_MIGRATIONS_DIR,
      // },
    };
  }
}
