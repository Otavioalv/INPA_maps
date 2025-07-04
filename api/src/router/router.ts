import express, {Request, Response} from 'express';
import { InfraController } from '@/controller/InfraController';

const router = express.Router();

router.get('/test', async (req: Request, res: Response) => {
    res.status(200).send({message: "Test Router"});
});

// End point para listar informações dos predios
router.post("/list-building-info", async (req: Request, res: Response) => {
    await new InfraController().listBuildingInfo(req, res);
});

export {router};