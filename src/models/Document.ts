export interface Document {
    id: number;
    status: DocumentStatus;
}

export enum DocumentStatus {
    CLEAN = "clean",
    CHECKED = "checked",
}
