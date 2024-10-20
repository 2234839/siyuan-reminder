<style scoped></style>
<template>
  <h4>思源再提醒插件</h4>
  server:<input v-model="server" />
  <br />
  token:<input type="password" v-model="token" />
</template>
<script setup lang="ts">
  const server = defineModel<string>("server");
  const token = defineModel<string>("token");
</script>
