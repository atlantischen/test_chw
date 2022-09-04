<template>
    <div class="top-list border-b border-gray-300">
        <div class="px-2 mb-2">Recommend</div>
        <div class="overflow-y-scroll">
            <div class="flex">
                <template v-for="item in topList" :key="item.trackId">
                    <van-skeleton avatar  avatar-size="100" avatar-shape="round" :loading="loading">

                        <div class="px-2">

                            <TopItem :dataSource="item" ></TopItem>

                        </div>
                    </van-skeleton>

                </template>
            </div>
        </div>
    </div>
</template>

<script lang='ts' setup>
import TopItem from "./item.vue"
import { useTopList } from '../../hooks/useTopList';

const { topList, getTopList, loading } = useTopList()


getTopList();
</script>

<style lang='scss' scoped>
.top-list {
    padding: 10px var(--van-padding-sm);
}

.overflow-y-scroll::-webkit-scrollbar {
    display: none;
}
.van-skeleton{
    padding: 0;
}
</style>

