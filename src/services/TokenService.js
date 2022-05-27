class TokenService {
    getToken() {
        return localStorage.getItem("token");
    }
    setToken(token) {
        localStorage.setItem("token", token);
    }
    deleteToken() {
        localStorage.removeItem("token");
    }
}

export const { getToken, setToken, deleteToken } = new TokenService();
