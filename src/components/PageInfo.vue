<style scoped>
  .c {
    position: fixed;
    top: 0;
    left: 50vw;
    background-color: antiquewhite;
    transform: translateX(-50%);
    padding: 0 10px 0 10px;
    border-radius: 0 0 10px 10px;
  }
</style>
<template>
  <div class="c">引用 {{ refBlocks.length }} 次</div>
</template>
<script setup lang="ts">
  import { ref } from "vue";
  import { sql, syBlock } from "../utils/siyuan";
  import { pageUrl } from "../链接再提醒";

  const refBlocks = ref([] as syBlock[]);
  sql(`select * from blocks
  where content like '%${pageUrl.href}%'
  LIMIT 1000000`).then((r) => {
    console.log("[r]", r);
    refBlocks.value = r.data as unknown as syBlock[];
  });
</script>
