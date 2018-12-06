import { Entity, PrimaryGeneratedColumn, Column, BaseEntity, JoinColumn, OneToOne, ManyToOne } from "typeorm";
import { Usuario } from "./Usuario";

@Entity()
export class Empresa extends BaseEntity {

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
        type: 'text',
        nullable: false
    })
    descricao: string;
    
    @ManyToOne(type => Usuario, usuario => usuario.empresas)
    usuario: Usuario;
}