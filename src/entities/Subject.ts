import { Column, Entity, JoinColumn, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm"
import { Room } from "./Room"

@Entity('subjects')
export class Subject {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({type: 'text'})
    name: string

    @ManyToMany(() => Room, r => r.subject)
    @JoinTable({
        name: 'room_subject',
        joinColumn: {
            name: 'room_id',
            referencedColumnName: 'id'
        },
        inverseJoinColumn: {
            name: 'subject_id',
            referencedColumnName: 'id'
        }
    })
    rooms: Room[]
}