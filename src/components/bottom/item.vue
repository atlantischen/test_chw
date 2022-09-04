<template>
    <div class="py-2 border-b border-gray-300 flex items-center">
        <div class="w-[20px] text-gray-400">{{ index }}</div>
        <div class="flex items-center" style="width: calc(100% - 20px)">
            <!-- 头像 -->
            <van-image :class="(index - 1) % 2 ? 'rounded-full' : 'rounded-xl'"
                class=" overflow-hidden flex-shrink-0 mx-2" width="53" height="53" :src="dataSource.artworkUrl60">
                <template v-slot:loading>
                </template>
            </van-image>
            <div style="width: calc(100% - 100px)">
                <!-- 名称 -->
                <div class="truncate text-sm">{{ dataSource.trackName }}</div>
                <!-- 类型 -->
                <div class="text-gray-400" style="font-size:10px">{{ dataSource.genres[0] }}</div>
                <!-- 评分 -->
                <div>
                    <van-rate v-model="rateValue" :size="12" color="#ffd21e" void-icon="star" void-color="#eee" />
                    <span class="text-gray-400 ml-1" style="font-size:10px">({{ dataSource.userRatingCount }})</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang='ts' setup>
import { computed } from "vue"

const props = defineProps<{
    dataSource: IApplication
    index: number
}>()

const rateValue = computed(() => parseInt(props.dataSource.trackContentRating))
</script>
