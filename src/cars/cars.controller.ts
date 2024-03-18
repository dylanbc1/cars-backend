import { Controller, Get, Post, HttpCode, Param, Body, Put, Delete, ParseUUIDPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './DTO/create-car.dto';
import { UpdateCarDto } from './DTO/update-car.dto';

@Controller('cars')
// @UsePipes(ValidationPipe)
export class CarsController {
    // inyectamos la dependencia del Service en el controller
    constructor (
        private readonly carService: CarsService
    ){
    }

    // delete, recibimos por parámetro el ID
    @Delete(":id")
    delete(@Param("id", ParseUUIDPipe) id: string): any {
        return this.carService.delete(id)
    }

    // put, recibimos por Body el objeto y por parámetro el ID
    @Put(":id")
    update(@Param("id", ParseUUIDPipe) id: string, @Body() car: UpdateCarDto): any {
        const carUpdated = this.carService.update(id, car);

        return carUpdated;
    }

    @Get()
    findAll(): any {
        // llamamos al service para ejecutar los métodos
        return this.carService.findAll();
    }

    // decimos que uno de los parametros usa una PIPE de validacion
    // asi, revisa en esos tipos de datos para hallar las validaciones
    // que definimos a estas clases
    @Post()
    @HttpCode(201)
    // usamos el tipo de CreateCarDTO
    create(@Body() car: CreateCarDto): Car {
        return this.carService.create(car)
    }

    @Get("test")
    test(): string {
        return "Other route in cars"
    }

    // especifiacmos que recibimos por parámetro de ruta
    // un ID
    // en el método especificamos ese parámetro y su tipo
    @Get(":id")
    findById(@Param("id", ParseUUIDPipe) id: string): any {
        return this.carService.findOneById(id)
    }
}
