/*
 * @Author: 'yang' '1173278084@qq.com'
 * @Date: 2024-03-10 22:37:20
 * @LastEditors: 'yang' '1173278084@qq.com'
 * @LastEditTime: 2024-04-13 16:18:55
 * @FilePath: \Web-General-background-management-system-background\src\main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import "./assets/main.css";

import { createApp } from "vue";
import pinia from "@/stores/index";
// import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import App from "./App.vue";
import router from "./router";
//引入elementplus
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
//引入全局样式
import "@/assets/css/common.scss";
//引入elementplus国际化
import zhCn from "element-plus/dist/locale/zh-cn.mjs";
import * as ElementPlusIconsVue from "@element-plus/icons-vue";
//导入ele的icon
const app = createApp(App);
import "virtual:svg-icons-register";
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
	app.component(key, component);
}
//使用elementplus
app.use(ElementPlus);
//使用ele国际化
app.use(ElementPlus, {
	locale: zhCn,
});
// pinia.use(piniaPluginPersistedstate);
app.use(pinia);
app.use(router);

app.mount("#app");
