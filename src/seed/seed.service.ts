import { Injectable } from '@nestjs/common';
import { CarsService } from '../cars/cars.service'
import { BrandService } from 'src/brand/brand.service';
import { carsSeed } from './data/cars.seed';
import { brandsSeed } from './data/brands.seed';

@Injectable()
export class SeedService {
  constructor(
    private readonly carsService: CarsService,
    private readonly brandsService: BrandService
  ) {}

  // traemos desde la data el arreglo de cars que poseemos y se lo enviamos
  // al otro modulo -> Comunicacion entre modulos
  populateDB() {
    this.carsService.fillCarsWithSeedData(carsSeed);
    this.brandsService.fillBrandsWithSeedData(brandsSeed);
  }
}