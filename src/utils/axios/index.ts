import axios from 'axios'
import type { InternalAxiosRequestConfig, AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'
import { IResponse } from './type'
import { showMessage } from './status'
const service = axios.create({
    baseURL: import.meta.env.VITE_APP_API_BASEURL,
    timeout: 5000
})


// 请求拦截
service.interceptors.request.use((config: InternalAxiosRequestConfig) => {
    return config
}, (error: AxiosError) => {
    return Promise.reject(error)
})

// 响应拦截
service.interceptors.response.use(
    (response: AxiosResponse) => {
        if (response.status === 200) {
            return response;
        }
        showMessage(response.status);
        return response;
    },
    // 请求失败
    (error: any) => {
        const { response } = error;
        if (response) {
            // 请求已发出，但是不在2xx的范围
            showMessage(response.status);
            return Promise.reject(response.data);
        }
        showMessage('网络连接异常,请稍后再试!');
    },
);

const request = <T = any>(config: AxiosRequestConfig): Promise<T> => {
    const conf = config
    return new Promise((resolve, reject) => {
        service.request<any, AxiosResponse<IResponse>>(conf).then((res: AxiosResponse<IResponse>) => {
            const result = res
            resolve(result as T)
        }).catch(error => {
            reject(error)
        })
    })
}

export function get<T = any>(config: AxiosRequestConfig): Promise<T> {
    return request({ ...config, method: 'GET' });
}

export function post<T = any>(config: AxiosRequestConfig): Promise<T> {
    return request({ ...config, method: 'POST' });
}

export default request;