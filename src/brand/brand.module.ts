import { Module } from '@nestjs/common';
import { BrandService } from './brand.service';
import { BrandController } from './brand.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Brand } from './entities/brand.entity';

@Module({
  controllers: [BrandController],
  providers: [BrandService],
  exports: [BrandService],
  // ORM para que funcione en este modulo
  // y le decimos qué entidad vamos a trabajar
  imports: [
    TypeOrmModule.forFeature([Brand]),
  ],
})
export class BrandModule {}
