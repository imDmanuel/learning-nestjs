import { DataSource } from 'typeorm';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

const ormConfig = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'pass123',
  database: 'postgres',
  entities: ['dist/**/*.entity.js'],
  migrations: ['dist/migrations/*.js'],
  // cli: {
  //   migrationsDir: 'src/migrations',
  // },
});

export default ormConfig;
