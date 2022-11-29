import { Request, Response } from "express";
import { subjectRepository } from "../repositories/subjectRepository";

export class SubjectComtroller {

    async create(req: Request, res: Response) {
        // create
        const { name } = req.body
        if (!name) {
            return res.status(400).json({ message: "data tidak boleh kosong" })
        }
        try {
            const newSubject = subjectRepository.create({ name })
            await subjectRepository.save(newSubject);
            return res.status(201).json(newSubject);
        } catch (error) {
            console.log(error);
            return res.status(500).json({ message: 'Internal server error' });
        }
    }
}