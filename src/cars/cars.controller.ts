import { Controller, Get, Post, HttpCode, Param, Body, ParseIntPipe, Put, Delete, ParseUUIDPipe } from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './DTO/create-car.dto';

@Controller('cars')
export class CarsController {
    // inyectamos la dependencia del Service en el controller
    constructor (
        private readonly carService: CarsService
    ){
    }

    // delete, recibimos por parámetro el ID
    @Delete()
    delete(@Param("id", ParseIntPipe) id: string): any {
        console.log(id)
        return id
    }

    // put, recibimos por Body el objeto y por parámetro el ID
    @Put()
    update(@Param("id", ParseUUIDPipe) id: string, @Body() body: any): any {
        console.log(body)
        return {id, body}
    }

    @Get()
    findAll(): any {
        // llamamos al service para ejecutar los métodos
        return this.carService.findAll();
    }

    @Post()
    @HttpCode(201)
    // usamos el tipo de CreateCarDTO
    create(@Body() car: CreateCarDto): any {
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
