import { Router } from "express";
import { RoomController } from "../controller/RoomController";
import { SubjectComtroller } from "../controller/SubjectController";

const routes = Router()

routes.post('/subject', new SubjectComtroller().create)
routes.post('/room', new RoomController().create)
routes.post('/room/:idRoom/create', new RoomController().createVideos)
routes.post('/room/:idRoom/subject', new RoomController().roomSubject)
routes.get('/room', new RoomController().list)

export default routes;