<template>


    <div class="overflow-y-scroll overflow-x-hidden h-full px-4" ref="bottomRef"
        :style="[height ? { height: height + 'px' } : {}]">
            <template v-for="(item, index) in bottomList" :key="item.trackId">
                <BottomItem :dataSource="item" :index="index + 1"></BottomItem>
            </template>


    </div>

</template>

<script lang='ts' setup>
import BottomItem from "./item.vue"
import { useBottomList } from '../../hooks/useBottomList';

import { ref, onMounted, computed, watch } from "vue"
const list = ref<IApplication[]>([]);
const loading = ref(false);
const finished = ref(false);
const { bottomList, getBottomList } = useBottomList()



const bottomRef = ref<HTMLElement>()
const height = ref(0)

onMounted(() => {
    getBottomList();
})

watch(bottomList, () => {
    height.value = bottomRef.value?.clientHeight || 0
})

</script>
