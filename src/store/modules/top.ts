import { defineStore } from "pinia";
import { getGrossingApplications } from "../../api/api";

interface ITopState {
    topList: IListItem[] // 顶部列表
    limit: number // 顶部列表个数
}

export const useTopStore = defineStore({
    id: "top",
    state: () => {
        const state: ITopState = {
            limit: 10,
            topList: [],
        }
        return state
    },
    actions: {
        getTopList(limit?: number) {
            getGrossingApplications(limit || this.limit).then((res) => {
                this.topList = res.feed.entry;
            }).catch((err) => {
                console.log('获取顶部列表失败', err);
            })
        }
    }
})