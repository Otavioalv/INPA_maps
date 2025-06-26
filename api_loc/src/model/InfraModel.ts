import connection from "@/database/connectionPsql";

import type { PoolClient } from "pg";
import type { BuildingListType } from "@/types/building";


export class InfraModel {
    public async listBuildingInfo(): Promise<BuildingListType> {
        let client: PoolClient | undefined;
        try {
            client = await connection.connect();

            const SQL = "SELECT id, build_name, build_number, lnglat, switchs FROM building_info_tb";

            const result: BuildingListType = (await client.query(SQL)).rows ?? [];

            client.release();

            return result;

        } catch(err) {
            client?.release();
            console.error("InfraModel <listBuildingInfo>: ", err);
            throw new Error("Erro interno no servidor");
        }
    }
}

