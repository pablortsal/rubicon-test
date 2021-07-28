import { api } from "../../local/ApiService/ApiService";

export const DocumentService = {
    getPendingDocuemnts: (): Promise<Array<Document>> => {
        return api.getRequest("");
    },
    getDocuemnts: (id: number): Promise<Document> => {
        return api.getRequest("");
    },
    updateDocumentStatus: (id: number, status: string): Promise<Document> => {
        return api.getRequest("");
    },
};
