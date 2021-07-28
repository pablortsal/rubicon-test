import { Mock } from "../../../mocks/documents";

class ApiService {
    public getRequest(): Promise<any> {
        return new Promise((resolve, reject) => {
            setTimeout(async () => {
                resolve(Mock.data);
            }, 1000);
        });
    }
}

export const api = new ApiService();
