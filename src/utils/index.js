import { api } from "../api";

export const getData = async (params) => {
    try {
        const result = await api.get(params.path, params.config || {});
        if (result.status == 200 || result.statusText.toLowerCase() === "ok") {
            return result.data;
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
                Authorization: `Bearer  ${token}`
            };
        }
        const result = await api.post(params.path, params.config || {}, authParams);
        if (result.status == 200 || result.statusText.toLowerCase() === "ok") {
            return result.data;
        } else {
            throw new Error(result);
        }
    } catch (error) {
        throw error.response;
    }
};
