import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";

@Entity('lettre')
export class Lettre {
    @PrimaryGeneratedColumn()
    idLettre: number;

    @Column('text')
    contenu: string;

    @ManyToOne(() => User, (user) => user.lettres)
    @JoinColumn({name: 'idUser'})
    user: User;
}