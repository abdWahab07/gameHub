// services/gamesApi.ts
import axios from "axios";

const gamesApi = axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "f5280fc71d0a444791a6834ce2f76a24"
    }
});

export default gamesApi;
