import { Consult } from "../../../models/Consult";
import { DocumentData } from "../../../models/Document";
import { api } from "../../local/ApiService/ApiService";

export const DocumentService = {
    getPendingDocuments: (): Promise<Array<Consult>> => {
        return api.getRequest();
    },
    getDocument: (consult: number, id: number): Promise<DocumentData> => {
        return new Promise(async (resolve, reject) => {
            const data = await api.getRequest();
            const consultData: Consult = data.find(
                (c: Consult) => c.id == consult
            );
            if (!consultData) reject();

            resolve(
                consultData.documents.find((c) => c.id == id) as DocumentData
            );
        });
    },
    updateDocumentStatus: (
        id: number,
        status: string
    ): Promise<DocumentData> => {
        return api.getRequest();
    },
};
