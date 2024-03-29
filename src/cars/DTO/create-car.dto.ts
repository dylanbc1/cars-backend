// decidimos que el DTO sea una clase para poder

import { IsString } from "class-validator";

// colocarle anotaciones
export class CreateCarDto {
    @IsString()
    readonly brand: string; // readonly para no permitir que el DTO se modifique

    @IsString()
    readonly model: string;
}