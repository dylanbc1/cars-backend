// decidimos que el DTO sea una clase para poder

import { IsOptional, IsString } from "class-validator";

// colocarle anotaciones
export class UpdateCarDto {
    @IsString()
    @IsOptional()
    readonly brand: string; // readonly para no permitir que el DTO se modifique

    @IsString()
    @IsOptional()
    readonly model: string;
}