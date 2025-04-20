<style scoped></style>
<template>
  <h4>思源再提醒插件</h4>
  链接打开协议类型:
  <select v-model="config.protocol">
    <option value="siyuan">siyuan协议</option>
    <option value="http">http协议</option>
  </select>
  <br />
  server:<input v-model="config.server" />
  <br />
  token:<input type="password" v-model="config.token" />
  <br />
  是否查询网页正文中的关键词: <input type="checkbox" v-model="config.queryWebContent" />

</template>
<script setup lang="ts">
import { config } from '../config'


</script>