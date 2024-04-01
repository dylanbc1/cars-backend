import {v4 as uuid} from 'uuid'
import { Car } from '../../cars/interface/car.interface';

export const carsSeed: Car[] = [
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