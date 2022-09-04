import axios, { type AxiosRequestConfig } from "axios"

const request = axios.create({
    baseURL: "https://itunes.apple.com/hk"
})

request.interceptors.request.use(config => {
    return config
})

request.interceptors.response.use(config => {
    return config.data
})


const get = <T>(url: string, config?: AxiosRequestConfig): Promise<T> => {
    return request.get(url, config)
}


export default {
    get
};