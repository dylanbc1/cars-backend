import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CarsModule } from './cars/cars.module';
import { BrandModule } from './brand/brand.module';
import { SeedModule } from './seed/seed.module';

@Module({
  imports: [CarsModule, BrandModule, SeedModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
