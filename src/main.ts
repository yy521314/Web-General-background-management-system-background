import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
//引入elementplus
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
//引入elementplus国际化
import zhCn from "element-plus/dist/locale/zh-cn.mjs";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
//导入ele的icon
const app = createApp(App);
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
	app.component(key, component);
}
//使用elementplus
app.use(ElementPlus);
//使用ele国际化
app.use(ElementPlus, {
	locale: zhCn,
});

app.use(createPinia());
app.use(router);

app.mount("#app");
