import { Request, Response } from "express";
import { InfraModel } from "@/model/InfraModel";
import { BuildingListType } from "@/types/building";

export class InfraController {
    private infraModel: InfraModel;

    constructor() {
        this.infraModel = new InfraModel();
    }

    public async listBuildingInfo(req: Request, res: Response): Promise<void>{
        try {
            const listInfo:BuildingListType = await this.infraModel.listBuildingInfo();

            res.status(200).send({message: "Informações listadas com sucesso", results: listInfo});
            return;
        } catch (err) {
            res.status(500).send({message: "Erro interno no servidor", results: []});
            throw new Error("Erro ao listar informações dos predios");
        }
    }
}

