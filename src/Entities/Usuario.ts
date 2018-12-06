import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, OneToOne, OneToMany } from "typeorm";
import { Empresa } from "./Empresa";

@Entity()
export class Usuario extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: string;

    // @PrimaryGeneratedColumn('uuid')
    // uuid: string;

    @Column({
        type: 'varchar',
        nullable: false
    })
    nome: string;

    @Column({
        type: 'varchar',
        nullable: false
    })
    email: string;

    
    @Column("double")
    views: number;

    @Column({
        type: 'varchar',
        nullable: false
    })
    telefones: string;

    @Column({
        default: true,
    })
    ativo: Boolean;

    @OneToMany(type => Empresa, empresa => empresa.usuario)
    empresas: Empresa[];
}