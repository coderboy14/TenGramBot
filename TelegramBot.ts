import axios from "axios";
const BASE_URL = "https://api.telegram.org/";

interface TelegramBotConfiguration {

}

const DEFAULT_CONFIG: TelegramBotConfiguration = {

}

class TelegramBot {
    private readonly _token: string;
    private _config?: TelegramBotConfiguration;
    private _offset?: number;

    constructor(token: string, config?: TelegramBotConfiguration) {
        this._token = token;
    }   

    // Internal Methods
    private async postServer(path: string, data: {[key: string]: any}): Promise<{} | any> {
        const res = await axios.post(`${BASE_URL}/${this._token}/${path}`, data);
        return (res.data.headers['Content-Type'].includes("application/json")) ? JSON.parse(res.data) : res.data;
    }

    private async pollServer() {
        const res = await this.postServer("getUpdates", {
            offset: (this._offset === undefined) ? undefined : this._offset + 1,
        });

        
    }

    // Public Methods
    public start() {

    }
};

export default TelegramBot;