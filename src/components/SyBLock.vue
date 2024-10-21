<style scoped>
  .c-block {
    border-bottom: solid #ccc 1px;
    display: flex;
  }
</style>
<template>
  <div class="c-block">
    <!-- {{ block.markdown }} -->
    <vue-markdown :source="block.markdown || block.content" />
    <a :href="`siyuan://blocks/${block.id}`">📝</a>
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
