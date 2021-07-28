import { DocumentData } from "./Document";

export interface Consult {
    id: number;
    name: string;
    documents: Array<DocumentData>;
}
