class ApiService {
    public getRequest(url: string): Promise<any> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({});
            }, 1000);
        });
    }
}

export const api = new ApiService();
