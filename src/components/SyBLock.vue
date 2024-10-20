<style scoped>
.c-block{
    border-bottom: solid #ccc 1px;
}
</style>
<template>
  <div class="c-block">
    <!-- {{ block.markdown }} -->
    <vue-markdown :source="block.markdown"  />
  </div>
</template>
<script setup lang="ts">
  import { syBlock } from "../utils/siyuan";
  import VueMarkdown from "vue-markdown-render";

  const props = defineProps({
    block: {
      type: Object as () => syBlock,
      required: true,
    },
  });
</script>
