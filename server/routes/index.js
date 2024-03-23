import { Router } from 'express';
import userRoutes from "./userRoute.js";

const router = Router();

router.use("/user", userRoutes);

// router.use('/api', apiRoutes);



export default router;