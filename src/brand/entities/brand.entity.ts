import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert } from "typeorm"

// especificamos que es una entidad
@Entity()
export class Brand {
    // primary key auto generada - tipo de auto gen
    @PrimaryGeneratedColumn('uuid')
    id: string;

    // el tipo de dato lo infiere del dato que le coloque
    // en nest, pero tambien puedo definirlo
    @Column('text', {
        unique: true
    })
    name: string;
    
    @Column('text', {
        nullable: true
    })
    description: string;

    @Column('text', {
        unique: true
    })
    slug: string;

    // puedo definir propiedades de estas columnas
    @Column('timestamp', {
        nullable: false,
        default: () => 'CURRENT_TIMESTAMP'
    })
    createdAt: number;

    @BeforeInsert()
    checkSlug(): void {
        if (!this.slug) {
            this.slug = this.name;
        }

        this.slug = this.slug.toLowerCase().replace(/ /g, '-');
    }
}
