<template>
    <div class="flex-shrink-0 text-center w-[100px] text-sm">
            <!-- 头像 -->
            <van-image class="rounded-xl overflow-hidden" width="80" height="80" :src="dataSource.artworkUrl100" />
            <!-- 名称 -->
            <div class="truncate px-2">{{ dataSource.trackName }}</div>
            <!-- 类型 -->
            <div class="text-gray-400">{{ dataSource.genres[0] }}</div>

    </div>

</template>

<script lang='ts' setup>
import { onMounted, ref } from 'vue';
defineProps<{
    dataSource: IApplication,
    
}>()

</script>
