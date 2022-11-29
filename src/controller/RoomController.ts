import { Request, Response } from "express";
import { roomRepository } from "../repositories/roomRepository";
import { subjectRepository } from "../repositories/subjectRepository";
import { videoRepository } from "../repositories/videosRepository";


export class RoomController {
    async create(req: Request, res: Response) {
        const { name, description } = req.body
        try {
            const newRomm = roomRepository.create({
                name, description
            });
            await roomRepository.save(newRomm);
            return res.status(201).json(newRomm);
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: 'Interal Serve Error' })
        }
    }
    async createVideos(req: Request, res: Response) {
        const { title, url } = req.body
        const { idRoom } = req.params

        try {
            const room = await roomRepository.findOneBy({ id: idRoom });
            if (!room) {
                return res.status(404).json({ message: 'room id not found' })
            }
            const newVideos = videoRepository.create({
                title,
                url,
                room
            })

            await videoRepository.save(newVideos);
            return res.status(201).json(newVideos);
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: 'Internal server error' });
        }
    }

    async roomSubject(req: Request, res: Response) {
        const { subject_id } = req.body
        const { idRoom } = req.params

        try {
            const room = await roomRepository.findOneBy({ id: idRoom });
            if (!room) {
                return res.status(404).json({ message: 'room id not found' })
            }
            const subjects = await subjectRepository.findOneBy({ id: subject_id });
            if (!subjects) {
                return res.status(404).json({ message: 'subjects id not found' })
            }
            const roomUpdate = {
                ...room,
                subject: [subjects],
            }
            await roomRepository.save(roomUpdate)
            return res.status(200).json(room)
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: 'Internal server error' });
        }
    }
    
    async list(req: Request, res: Response) {
        try {
            const room = await roomRepository.find({
                relations: {
                    subject: true
                }
            });
            if (!room) {
                return res.status(404).json({ message: 'room id not found' })
            }
            return res.json(room);
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: 'Internal server error' });
        }
    }
}