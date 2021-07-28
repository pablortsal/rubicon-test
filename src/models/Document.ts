import { Sensor } from "./Sensor";

export interface DocumentData {
    id: number;
    status: DocumentStatus;
    previewUrl: string;
    url: string;
    sensors: Array<Sensor>;
}

export enum DocumentStatus {
    PENDING = "pending",
    CHECKED = "checked",
}
