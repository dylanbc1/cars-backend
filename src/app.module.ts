import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarsModule } from './cars/cars.module';
import { BrandModule } from './brand/brand.module';
import { SeedModule } from './seed/seed.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    // for root solo debe aparecer una vez por modulo
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      database: process.env.DB_NAME,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      autoLoadEntities: true, // cuando defina las entidades en nest
      // se creen automaticamente en la base de datos
      synchronize: true,
    }),
    CarsModule, BrandModule, SeedModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
