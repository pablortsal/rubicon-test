export const DATA_MOCK_STORAGE = "data_store";

class StorageS {
    getItem(key: string): Promise<any> {
        return new Promise((resolve, rejected) => {
            let data = window.localStorage.getItem(key);
            if (!data) {
                rejected(undefined);
            } else {
                resolve(JSON.parse(data));
            }
        });
    }
    setItem(key: string, data: any) {
        return new Promise((resolve, rejected) => {
            window.localStorage.setItem(key, JSON.stringify(data));
            resolve(data);
        });
    }
    updateItem(key: string, data: any): Promise<void> {
        return new Promise((resolve, rejected) => {
            window.localStorage.setItem(key, JSON.stringify(data));
            resolve();
        });
    }
}

export const StorageService = new StorageS();
