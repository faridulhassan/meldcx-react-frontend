import axios from "axios";

export const api = axios.create({
    baseURL: "http://35.201.2.209:8000"
});
export const NOTIFY_PARAMS = {
    name: "Md. Faridul Hassan",
    email: "faridul940@gmail.com",
    repoUrl: "https://github.com/faridulhassan",
    message: "I have tried my best and hope to get into next phase!"
};
