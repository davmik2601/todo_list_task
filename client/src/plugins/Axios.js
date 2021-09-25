import axios from "axios";
import { API_URL } from "../config/keys";

const Axios = axios.create({
    baseURL: API_URL || 'http://localhost:3001',
    headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
        Authorization: `Bearer ${sessionStorage.getItem('access_token') || null}`
    },
});

export default Axios;