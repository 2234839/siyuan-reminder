<style scoped></style>
<template>
  <div style="background: #fff">
    <Config
      v-if="configShow"
      v-model:server="config.server"
      v-model:token="config.token"
      v-model:protocol="config.protocol" />
    <PageInfo />
  </div>
</template>
<script setup lang="ts">
  import { config } from './config';
  import PageInfo from './components/PageInfo.vue';
  import Config from './components/config.vue';
  import { ref } from 'vue';
  import { GM } from '$';

  const configShow = ref(false);

  GM.registerMenuCommand('切换配置面板', () => {
    configShow.value = !configShow.value;
  });
</script>
