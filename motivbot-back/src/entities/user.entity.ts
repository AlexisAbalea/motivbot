import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Lettre } from "./lettre.entity";

@Entity('user')
export class User {

    @PrimaryGeneratedColumn()
    idUser: number;

    @Column()
    nom: string;

    @Column()
    prenom: string;

    @Column()
    email: string;
    
    @Column()
    credit: number;

    @OneToMany(() => Lettre, (lettre) => lettre.user)
    lettres: Lettre[];
}
