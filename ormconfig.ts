import { TypeOrmModuleOptions } from '@nestjs/typeorm';

import dotenv from 'dotenv';
dotenv.config();

const config: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [],
  autoLoadEntities: true,
  synchronize: false,
  logging: true,
  keepConnectionAlive: true,
};

export = config;
