import axios from "axios";

export const api = axios.create({
    baseURL: "http://35.201.2.209:8000"
});
