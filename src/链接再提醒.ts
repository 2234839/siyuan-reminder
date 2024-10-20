/**
 * ## 链接再提醒
 * 1. 对于标签页链接本身的检查
 * 2. 支持对页面中的所有链接进行分析
 */

import { reactive, watch, watchEffect } from "vue";

export const pageUrl = new URL(location.href);
export const anchorLinks = reactive(new Set<string>());
async function 链接再提醒() {
  setInterval(() => {
    document.querySelectorAll("a").forEach((anchor) => {
      anchorLinks.add(anchor.href);
    });
  }, 1_000);
}
链接再提醒();
watch(
  anchorLinks,
  (value, oldValue) => {
    console.log("[value]", value);
  },
  { deep: true },
);

