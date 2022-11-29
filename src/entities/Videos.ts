import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Room } from "./Room";


@Entity('videos')
export class Videos {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ type: 'text' })
    title: string

    @Column({ type: 'text' })
    url: string

    @ManyToOne(() => Room, r => r.videos)
    @JoinColumn({ name: 'room_id' })
    room: Room

}