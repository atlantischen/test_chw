import { computed, ref, watch } from "vue"
import { useBottomStore } from "../store/modules/bottom"
import { useApplication } from "./helper/useApplication"

export const useBottomList = () => {
    const bottomStore = useBottomStore()
    const { applications, getApplications } = useApplication()

    const { setSearchValue} = bottomStore;
    // console.log(loading,'loading');
    
   
    
    // 底部列表
    const bottomList = computed(() => bottomStore.bottomList)
   
    const loading = ref(false)
    // 底部详细列表
    const bottomDetailList = computed(() => applications.value)

    // 筛选值
    const searchValue = computed(() => bottomStore.searchValue)

    // 底部筛选列表
    const filterList = computed(() => {
        return bottomDetailList.value?.filter((item) => {
            const { trackName, sellerName, description } = item;
            const value = searchValue.value

            if (!value) return true

            return trackName.includes(value) || sellerName.includes(value) || description.includes(value)
        }) || []
    })


    const getBottomList = () => {
        bottomStore.getBottomList()
        watch(bottomList, (val) => {

            const ids = val.map(item => {
                return item.id.attributes["im:id"]
            })

            getApplications(ids).then(() => {
                if(ids.length===20){
                    bottomStore.getBottomList(100)
                }

            })

        })
    }

    return { bottomList: filterList, getBottomList, setSearchValue,loading }
}