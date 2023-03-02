import { Router } from "express";

import { projectsRouter } from "./projects.routes";

const router = Router();

router.use('/projects', projectsRouter);

export { router };
