<template>
  <div class="h-screen flex flex-col">

    <!-- search -->
    <div class="flex-shrink-0">
      <Search></Search>
    </div>

    <!-- top list -->
    <div class="flex-shrink-0">
      <TopList></TopList>
    </div>

    <!-- bottom list -->
    <div class="flex-grow">
      <BottomList></BottomList>
    </div>

  </div>
</template>

<script lang='ts' setup>
import Search from "./components/search/index.vue"
import TopList from "./components/top/index.vue"
import BottomList from "./components/bottom/index.vue"
</script>
