import { PartialType } from '@nestjs/mapped-types';
import { CreateBrandDto } from './create-brand.dto';
import { IsOptional, IsUUID } from 'class-validator';

// PartialType dice que UpdateBrandDto va a tener todos los atributos
// del create pero en opcional !!!

// si quiero que algo vaya obligatoriamente lo escribimos adentro sin
// la tag @IsOptional
export class UpdateBrandDto extends PartialType(CreateBrandDto) {
    @IsUUID()
    @IsOptional()
    readonly id: string
}
