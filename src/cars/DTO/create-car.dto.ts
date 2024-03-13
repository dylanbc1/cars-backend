// decidimos que el DTO sea una clase para poder
// colocarle anotaciones
export class CreateCarDto {
    readonly brand: string; // readonly para no permitir que el DTO se modifique
    readonly model: string;
}