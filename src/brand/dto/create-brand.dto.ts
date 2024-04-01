import {IsString, Length} from "class-validator"

// readonly porque no queremos que los datos
// que vienen desde el usuario sean modificados
export class CreateBrandDto {
    @IsString()
    @Length(3, 50)
    readonly name: string
}
