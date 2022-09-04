import { computed, ref, watch } from "vue"
import { useTopStore } from "../store/modules/top"
import { useApplication } from "./helper/useApplication"


export const useTopList = () => {
    const topStore = useTopStore()
    const { applications, getApplications } = useApplication()

    // 顶部列表
    const topList = computed(() => topStore.topList)

    // 顶部详细列表
    const topDetailList = computed(() => applications.value)

    // 顶部列表loading
    const loading = ref(false)

    const getTopList = () => {
        loading.value = false;
        topStore.getTopList()
    }

    watch(topList, (val) => {
        const ids = val.map(item => {
            return item.id.attributes["im:id"]
        })

        getApplications(ids).then(() => {
            // loading.value = true
        })
    })

    return { topList: topDetailList, getTopList, loading }
}