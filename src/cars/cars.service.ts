import { Injectable, NotFoundException } from '@nestjs/common';
import {v4 as uuid} from 'uuid'
import { CreateCarDto } from './DTO/create-car.dto';

@Injectable()
export class CarsService {
    private cars = [
        {
            id: uuid(),
            brand: 'Toyota',
            model: 'Corolla'
        },
        {
            id: uuid(),
            brand: 'Honda',
            model: 'Civic'   
        },
        {
            id: uuid(),
            brand: 'Jeep',
            model: 'Cherokee'
        }
    ]

    // creamos los métodos que usa el controller
    findAll(): any {
        return this.cars;
    }

    findOneById(id: string): any {
        const car = this.cars.find(car => car.id === id)

        // si no encuentra el car
        if (!car) {
            throw new NotFoundException(`Car with ID ${id} not found`)
        }

        return car
    }

    create(createCar: CreateCarDto): any {
        const car: any = {
            id: uuid(),
            // lo que hace el spread operator es juntar
            // aquí en este objeto 'car' los atributos
            // que trae el 'createCar' junto con el id
            ...createCar
        }

        this.cars.push(car)
    }
}
