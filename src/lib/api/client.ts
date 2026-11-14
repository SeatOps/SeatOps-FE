import axios from "axios";

// CRA -> vite 사용 
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://dev-api.sidaewon.com';

const SETTING = {
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type' : 'application/json'
    }
}
export const apiClient = axios.create(SETTING);
export const publicClient = axios.create(SETTING);