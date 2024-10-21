import { createApp } from "vue";
import App from "./App.vue";
import ElementInfo from "./components/ElementInfo.vue";
import { sql } from "./utils/siyuan";
import "./链接再提醒";

createApp(App).mount(
  (() => {
    const app = document.createElement("div");
    app.style.cssText = `
  position: fixed;
  right: 0;
  top:0;
  z-index:99999999999999;
  `;
    console.log("[app]", app);
    document.body.append(app);
    return app;
  })(),
);

/**
 * ## 虚拟引用
 * 1. 获取虚拟引用的关键词表
 * 2. 然后检查页面上的文字在关键词表中是否存在
 * 3. 添加为对应的文字添加虚拟引用的样式，还有 hover 展示
 *
 *
 *
 */

setTimeout(async () => {
  const sy = await sql(`
    SELECT id, content AS segmenter FROM blocks WHERE content != '' AND (TYPE = 'd' OR TYPE = 'h')
    UNION ALL
    SELECT id, name AS segmenter FROM blocks WHERE name != ''
    UNION ALL
    SELECT id, ALIAS AS segmenter FROM blocks WHERE ALIAS != ''
  LIMIT 100000
    `);
  const rows = sy.data as unknown as { id: string; segmenter: string }[];
  const doms = getParentsOfTextNodes(document.body);

  const ref = [...doms].filter((el) => {
    const text = el.textContent;

    const includeRows = rows.filter((row) => text?.includes(row.segmenter));
    const El = el instanceof HTMLElement ? el : el.parentElement;
    if (includeRows.find((t) => t.segmenter === text) && El) {
      El.style.cssText = `
        border-bottom: dashed 2px;
        `;
      // background: #c7c4c47a;
      const container = El;
      createApp(ElementInfo, {
        rows: includeRows,
      }).mount(
        (() => {
          const el = document.createElement("sup");
          el.style.cssText = `
            margin-left: 5px;
        `;
          container?.append(el);
          return el;
        })(),
      );
    }
  });
}, 3000);
function getParentsOfTextNodes(element: HTMLElement) {
  const parentElements = new Set<Text>(); // 使用Set来避免重复
  // 使用树递归遍历DOM元素
  (function traverse(node: Node | Text) {
    if (node instanceof Text) {
      // 如果是文本节点，将其添加到Set中
      parentElements.add(node);
    }
    // 遍历子节点
    Array.from(node.childNodes).forEach(traverse);
  })(element);

  return Array.from(parentElements); // 转换Set为数组
}
