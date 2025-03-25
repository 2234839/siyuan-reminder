<style scoped></style>
<template>
  <h4>思源再提醒插件</h4>
  链接打开协议类型:
  <select v-model="protocol">
    <option value="siyuan">siyuan协议</option>
    <option value="http">http协议</option>
  </select>
  <br />
  server:<input v-model="server" />
  <br />
  token:<input type="password" v-model="token" />
</template>
<script setup lang="ts">
  const protocol = defineModel<"siyuan"|"http">("protocol", { default: "siyuan" });
  const server = defineModel<string>("server");
  const token = defineModel<string>("token");
</script>