import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import "./链接再提醒";
import { sql } from "./utils/siyuan";
import { pageUrl } from "./链接再提醒";

createApp(App).mount(
  (() => {
    const app = document.createElement("div");
    app.style.cssText = `
  position: fixed;
  right: 0;
  top:0;
  `;
    document.body.append(app);
    return app;
  })(),
);

