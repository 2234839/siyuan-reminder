<style scoped>
  .c {
    position: fixed;
    top: 0;
    left: 50vw;
    background-color: antiquewhite;
    transform: translateX(-50%);
    padding: 0 10px 0 10px;
    border-radius: 0 0 10px 10px;
    color: #333;
  }

  .c-list {
    position: absolute;
    transform: translateX(-50%);
    background-color: antiquewhite;
    max-height: 80vh;
    min-width: 400px;
    overflow-y: auto;
    padding: 5px 10px;
    border-radius: 10px;
  }
</style>
<template>
  <div class="c" @mouseenter="blockListShow = true" @mouseleave="blockListShow = false">
    <span>引用 {{ refBlocks.length }} 次</span>
    <div class="c-list" v-if="blockListShow">
      <SyBLock :block="block" v-for="block of refBlocks" />
    </div>
  </div>
</template>
<script setup lang="ts">
  import { ref } from "vue";
  import { sql, syBlock } from "../utils/siyuan";
  import { pageUrl } from "../链接再提醒";
  import SyBLock from "./SyBLock.vue";
  const blockListShow = ref(false);
  const refBlocks = ref([] as syBlock[]);
  sql(`select * from blocks
  where
    content like '%${pageUrl.origin + pageUrl.pathname}%'
    and
    type = 'p'
  ORDER BY created DESC
  LIMIT 1000000`).then((r) => {
    console.log("[r]", r);
    refBlocks.value = (r.data || []) as unknown as syBlock[];
  });
</script>
