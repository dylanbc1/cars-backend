import {IsString, Length, IsOptional} from "class-validator"

// readonly porque no queremos que los datos
// que vienen desde el usuario sean modificados
export class CreateBrandDto {
    @IsString()
    @Length(3, 50)
    readonly name: string;

    @IsString()
    @IsOptional()
    @Length(3, 1000)
    readonly description: string;
    
    @IsString()
    @IsOptional()
    readonly slug: string;
}
