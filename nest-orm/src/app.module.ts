import { Module } from '@nestjs/common';
import * as dotenv from  'dotenv';
import { TypeOrmModule } from '@nestjs/typeorm';

dotenv.config();

@Module({
  imports: [TypeOrmModule.forRoot({
     type: 'mysql',
     host: process.env.DB_HOST || 'localhost', 
     port: parseInt(process.env.DB_PORT, 10) || 3307, 
     username: process.env.DB_USER || 'root',
     password: process.env.DB_PASSWORD || 'password!23',
     database: process.env.DB_NAME || 'example', 
     synchronize: false 
  })],
  controllers: [],
  providers: [],
})

export class AppModule {}


