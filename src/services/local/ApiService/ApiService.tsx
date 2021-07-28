import { Mock } from "../../../mocks/documents";
import { StorageService } from "../Storage/StorageSerivce";

class ApiService {
    public getRequest(key: string): Promise<any> {
        return StorageService.getItem(key);
    }
    public patchRequest(key: string, data: any): Promise<any> {
        return StorageService.updateItem(key, data);
    }
}

export const api = new ApiService();
