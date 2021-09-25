import { Router } from "express";
import authRoutes from './authRoutes.js';
import taskRoutes from './taskRoutes.js';


const router = Router();

const routes = [
    ...authRoutes,
    ...taskRoutes,
];

routes.forEach((item) => {
        router[item.method](`${item.path}`,
            ...(item.validators ? item.validators : []),
            ...(item.middlewares ? item.middlewares : []),
            item.action);
})

export default router;