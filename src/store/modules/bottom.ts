import { defineStore } from "pinia";
import { getFreeApplications } from "../../api/api";

interface IBottomState {
    bottomList: IListItem[] // 顶部列表
    limit: number // 顶部列表个数
    searchValue: string // 搜索值
    // loading: boolean // 加载状态
    // finished: boolean // 是否加载完成
}

export const useBottomStore = defineStore({
    id: "bottom",
    state: () => {
        const state: IBottomState = {
            limit: 20,
            bottomList: [],
            searchValue: "",

        }
        return state
    },
    actions: {
        setSearchValue(value: string) {
            this.searchValue = value;
        },
        getBottomList(limit?: number) {
            getFreeApplications(limit || this.limit).then((res) => {
                this.bottomList = res.feed.entry;

            }).catch((err) => {
                console.log('获取底部列表失败', err);
            })
        },
    }
})