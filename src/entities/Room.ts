import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Subject } from "./Subject";
import { Videos } from "./Videos";

@Entity('rooms')
export class Room {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ type: 'text' })
    name: string

    @Column({ type: 'text', nullable: true })
    description: string

    @OneToMany(() => Videos, v => v.room)
    videos: Videos[]

    @ManyToMany(() => Subject, s => s.rooms)
    subject: Subject[]
}