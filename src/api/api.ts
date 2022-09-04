import request from "../utils/http";

// 获取最受欢迎应用列表
export const getGrossingApplications = (limit: number) => {
    return request.get<IList>(`/rss/topgrossingapplications/limit=${limit}/json`)
}

// 获取免费应用列表
export const getFreeApplications = (limit: number) => {
    return request.get<IList>(`/rss/topfreeapplications/limit=${limit}/json`)
}

// 获取应用详情
export const getApplication = (id: string) => {
    return request.get<IResultList>(`/lookup`, { params: { id } })
}