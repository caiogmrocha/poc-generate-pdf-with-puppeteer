import { Router } from "express";

const projectsRouter = Router();

projectsRouter.get('/export/pdf', (req, res) => res.json({ message: 'Hello World' }))

export { projectsRouter };
