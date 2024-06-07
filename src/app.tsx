import { useState } from "preact/hooks";
import sy from "./sy.json";
export function App() {
  const [count, setCount] = useState(0);
  console.clear();
  console.time("count");

  // 使用示例
  const doms = getParentsOfTextNodes(document.body);
  console.log(doms);

  const ref = [...doms].filter((el) => {
    el.textContent;
    const text = el.textContent;
    const includeRows = sy.rows.filter((row) => text?.includes(row.segmenter));
    if (el.parentElement) {
      el.parentElement.title = includeRows.map((el) => el.segmenter).join(",");
    }
    return;
    // return sy.rows.find((row) => row.segmenter === text);
  });

  ref.forEach((el) => {
    if (el.parentElement) {
      el.parentElement.style.outline = "solid 1px red";
      el.parentElement.title = el.textContent ?? "";
    } else {
      console.log(el);
    }
  });

  // sy.rows.forEach((row) => {
  //   const d = doms.filter((el) => row.segmenter.includes(el.innerText));
  //   if (d.length > 0) {
  //     console.log(row, d);
  //   }
  // });
  console.log(ref);
  console.timeEnd("count");
  return <></>;
}
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
