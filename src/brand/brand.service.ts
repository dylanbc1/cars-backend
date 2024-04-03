import { Injectable } from '@nestjs/common';
import {v4 as uuid} from 'uuid';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brand } from './entities/brand.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class BrandService {
  private brands: Brand[] = [];

  // inyectamos el repositorio de Brands que creamos
  // no es necesario crear el repositorio, nest
  // ya lo crea automaticamente
  constructor(
    @InjectRepository(Brand) 
    private readonly brandRepository: Repository<Brand>
  ){
  }

  // llenar data con seedData de Brands
  fillBrandsWithSeedData(brands: Brand[]): void {
    this.brands = brands;
  }

  async create(createBrandDto: CreateBrandDto) {
    // creamos el objeto con el .create, lo mapea directo
    // a la entity de la base de datos
    const brand = this.brandRepository.create(createBrandDto);

    // guardamos el objeto
    await this.brandRepository.save(brand);

    return brand;
  }

  findAll() {
    return this.brands;
  }

  findOne(id: string) {
    const brand = this.brands.find(brand => brand.id === id)

    if (!brand) {
      throw new Error(`Brand with id ${id} not found`)
    }

    return brand;
  }

  update(id: string, updateBrandDto: UpdateBrandDto) {
    let brandDB: Brand = this.findOne(id)

    // hacemos un mapeo, el que haga match
    // le hacemos merge de datos con el spread
    // operator con el brandUpdated que paso por parametro
    
    // hacemos el return brand porque en cada iteración de la función
    // del map tengo que devolver el objeto para que se vaya almacenando
    this.brands = this.brands.map(brand => {
      if (brand.id === id) {
          brand = {
            ...brand,
            ...updateBrandDto
          }
      }
      return brand
    })

    return this.findOne(id);
  }

  remove(id: string) {
    const brand = this.findOne(id)

    this.brands = this.brands.filter(brand => brand.id !== id)
  }
}
