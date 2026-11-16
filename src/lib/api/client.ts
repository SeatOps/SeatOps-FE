import axios, { type InternalAxiosRequestConfig } from "axios";
import { useAuthStore } from "../../stores/useAuthStore";
 
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://dev-api.sidaewon.com';

const setting = {
    baseURL: API_BASE_URL,
    timeout: 15000,
    withCredentials: true
}

// 토큰 갱신이 필요한 요청에 사용
export const apiClient = axios.create(setting);
// 토큰 갱신을 거치지 않는 요청에 사용
export const publicClient = axios.create(setting);

interface Retry extends InternalAxiosRequestConfig {
    hasRetried?: boolean;
}

let refreshPromise: Promise<void> | null = null;

// 로그인 상태 관리
export function clearAuth() {
    useAuthStore.getState().setIsLoggedIn(false);
}

// 인증 갱신 함수
export function refreshAccessToken(): Promise<void> {
    if(refreshPromise === null) {
        refreshPromise = publicClient.post('/jwt/refresh', {})
        .then(() => undefined)
        .finally(() => {refreshPromise = null;});
    }
    return refreshPromise;
}

// 응답 인터셉터
apiClient.interceptors.response.use(
    (response) => {
        return response;
    },
    async (error: unknown) => {
        if(!axios.isAxiosError(error)) throw error;
        const request = error.config as Retry | undefined;
        if(error.response?.status !== 401 || !request) throw error;

        if(request.hasRetried) {
            clearAuth();
            throw error;
        }
        request.hasRetried = true;

        try {
            await refreshAccessToken();
        } catch(error) {
            if(axios.isAxiosError(error) && error.response?.status == 401) {
                clearAuth();
            }
            throw error;
        }
        return apiClient.request(request)
    }
)