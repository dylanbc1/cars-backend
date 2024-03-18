import { Injectable, NotFoundException } from '@nestjs/common';
import {v4 as uuid} from 'uuid'
import { CreateCarDto } from './DTO/create-car.dto';
import { UpdateCarDto } from './DTO/update-car.dto';

@Injectable()
export class CarsService {
    private cars: Car[] = [
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

    delete(id: string): Car[] {
        const carExists = this.findOneById(id)

        // obtiene los carros que cumplan con la condicion
        // en este caso aquellos con ID distinto al deseado para eliminar
        this.cars = this.cars.filter(c => 
            c.id != id
        )

        return this.cars;
    }

    update(id: string, carUpdated : UpdateCarDto): Car {
        let carExists: Car = this.findOneById(id)
        
        carExists = {
            // el spread operator ... funciona para hacer merge
            // entre dos objetos, entonces, hace el junte de los
            // datos que estan en car y en carUpdate -> SIEMPRE
            // SOBREESCRIBE AL PRIMERO SI HAY DATOS REPETIDOS
            // EN EL SEGUNDO OBJETO
            ...carExists,
            ...carUpdated
        }

        // recorre todo el arreglo, hago un operador ternario de condicion
        // si el ID es igual entonces alli dejo el car nuevo que me pasaron
        // si no, dejo el viejo
        this.cars = this.cars.map(c => c.id === id ? carExists : c);

        return this.findOneById(id);
    }

    // creamos los métodos que usa el controller
    findAll(): Car[] {
        return this.cars;
    }

    findOneById(id: string): Car {
        const car: Car = this.cars.find(car => car.id === id)

        // si no encuentra el car
        if (!car) {
            throw new NotFoundException(`Car with ID ${id} not found`)
        }

        return car
    }

    create(createCar: CreateCarDto): Car {
        const car: Car = {
            id: uuid(),
            // lo que hace el spread operator es juntar
            // aquí en este objeto 'car' los atributos
            // que trae el 'createCar' junto con el id
            ...createCar
        }

        this.cars.push(car)
        return car
    }
}
