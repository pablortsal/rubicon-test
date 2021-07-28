import { Consult } from "../../../models/Consult";
import { DocumentData } from "../../../models/Document";
import { api } from "../../local/ApiService/ApiService";
import {
    DATA_MOCK_STORAGE,
    StorageService,
} from "../../local/Storage/StorageSerivce";

export const DocumentService = {
    getPendingDocuments: (): Promise<Array<Consult>> => {
        return api.getRequest(DATA_MOCK_STORAGE);
    },
    getDocument: (consult: number, id: number): Promise<DocumentData> => {
        return new Promise(async (resolve, reject) => {
            const data = await api.getRequest(DATA_MOCK_STORAGE);
            const consultData: Consult = data.find(
                (c: Consult) => c.id == consult
            );
            if (!consultData) reject();

            resolve(
                consultData.documents.find((c) => c.id == id) as DocumentData
            );
        });
    },
    updateDocument: (
        id: number,
        document: any,
        consult: number
    ): Promise<boolean> => {
        return new Promise(async (resolve, rejected) => {
            let currentData = await StorageService.getItem(DATA_MOCK_STORAGE);

            if (currentData) {
                let consultIndex = currentData.findIndex(
                    (c: Consult) => c.id == consult
                );

                let consultDocumentIndex = currentData[
                    consultIndex
                ].documents.findIndex((d: DocumentData) => d.id == id);

                currentData[consultIndex].documents[consultDocumentIndex] =
                    document;

                await StorageService.updateItem(DATA_MOCK_STORAGE, currentData);
                resolve(true);
            } else {
                rejected();
            }
        });
    },
};
