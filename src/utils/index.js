import { api } from "../api";

export const getData = async (params) => {
    try {
        const result = await api.get(params.path, params.config || {});
        const statusText = result.statusText.toLowerCase();
        if (result.status <= 204 || statusText === "ok" || statusText === "created") {
            return result;
        } else {
            throw new Error(result);
        }
    } catch (error) {
        throw error.response;
    }
};

export const postData = async (params) => {
    try {
        const authParams = {};
        if (params.token) {
            authParams.headers = {
                Authorization: `Bearer ${params.token}`
            };
        }
        const result = await api.post(params.path, params.config || {}, authParams);
        if (result.status <= 204 || statusText === "ok" || statusText === "created") {
            return result;
        } else {
            throw new Error(result);
        }
    } catch (error) {
        throw error.response;
    }
};
