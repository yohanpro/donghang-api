import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import dotenv from 'dotenv';
import { Users } from './src/entities/Users';
import { DonghangArticle } from './src/entities/DonghangArticle';
import { DonghangComments } from './src/entities/DonghangComments';

dotenv.config();

const config: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [Users, DonghangArticle, DonghangComments],
  autoLoadEntities: true,
  synchronize: true,
  logging: true,
  keepConnectionAlive: true,
};

export = config;
