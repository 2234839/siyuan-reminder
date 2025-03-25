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
    <a v-if="config.protocol === 'siyuan'" :href="`siyuan://blocks/${block.id}`">📝</a>
    <a v-else-if="config.protocol === 'http'" :href="`${config.server}/?id=${block.id}&focus=true`">📝</a>
  </div>
</template>
<script setup lang="ts">
  import { config } from '../config';
  import { syBlock } from '../utils/siyuan';
  import VueMarkdown from 'vue-markdown-render';
  config;
  const props = defineProps({
    block: {
      type: Object as () => syBlock,
      required: true,
    },
  });
</script>
