import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { CarsModule } from '../cars/cars.module';
import { BrandModule } from '../brand/brand.module';

// importamos los modulos que vamos a necesitar para asi
// usar sus servicios
@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports: [CarsModule, BrandModule],
})
export class SeedModule {}
