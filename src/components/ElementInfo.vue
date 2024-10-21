<style scoped>
  .c-list {
    position: absolute;
    transform: translateX(-50%);
    background-color: antiquewhite;
    max-height: 80vh;
    min-width: 400px;
    overflow-y: auto;
    padding: 5px 10px;
    border-radius: 10px;
    color: #333;
    z-index: 9999;
  }
</style>
<template>
  <div
    style="display: inline-block"
    @mouseenter="blockListShow = true"
    @mouseleave="blockListShow = false">
    [{{ rows.length }}]
    <div class="c-list" v-if="blockListShow">
      <SyBLock :block="block" v-for="block of refBlocks" />
    </div>
  </div>
</template>
<script setup lang="ts">
  import { ref, watchEffect } from "vue";
  import { sql, syBlock } from "../utils/siyuan";
  import SyBLock from "./SyBLock.vue";

  const blockListShow = ref(false);

  const props = defineProps({
    rows: {
      type: Array as () => { id: string; segmenter: string }[],
      required: true,
    },
  });

  const refBlocks = ref([] as syBlock[]);
  watchEffect(() => {
    if (blockListShow.value && refBlocks.value.length === 0) {
      sql(`select * from blocks
  where
    id IN (${props.rows.map((row) => `'${row.id}'`).join(",")})
  ORDER BY created DESC
  LIMIT 1000000`).then((r) => {
        refBlocks.value = (r.data || []) as unknown as syBlock[];
        console.log("[r]", r, refBlocks.value);
      });
    }
  });
</script>
