import express, {Request, Response} from 'express';
import cors from "cors";
import http from "http";
import {router} from './router/router'

const app = express();
app.use(express.json());
app.use(cors({origin: "*"}));

const PORT: number = 5433;
const HOST: string = "0.0.0.0";

const server = http.createServer(app);

app.get('/health', (req, res) => {
  res.json({ status: 'healthy' });
});

app.use("/infra", router);
app.use((req: Request, res: Response) => {res.status(200).send({message: "router not exists"})});


// console.log(`Listening in url local: http://${configAPI.localHost}:${PORT} and http://${configAPI.publicHost}:${PORT}`);
server.listen(PORT, HOST, async () => {
    console.log(`Listening in url local: http://localhost:${PORT} and http://${HOST}:${PORT}`);
});
