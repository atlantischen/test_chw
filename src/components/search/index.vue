<template>
    <div class="border-b border-gray-300">
        <van-search v-model="value" placeholder="Search..." />
    </div>
</template>

<script lang='ts' setup>
import { ref, watch } from "vue"
import { useBottomList } from "../../hooks/useBottomList"
const value = ref("")

const { setSearchValue } = useBottomList()

watch(value, (val) => {    
    setSearchValue(val)
})
</script>
<style  >
    .van-search__content {
        border-radius: 14px !important;
    }
</style>
