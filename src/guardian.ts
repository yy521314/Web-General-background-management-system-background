/*
 * @Author: 'yang' '1173278084@qq.com'
 * @Date: 2024-04-16 22:52:46
 * @LastEditors: 'yang' '1173278084@qq.com'
 * @LastEditTime: 2024-04-17 21:08:25
 * @FilePath: \Web-General-background-management-system-background\src\guardian.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import router from "./router";
import { useMenu } from "@/stores/menu";

// 全局前置守卫
router.beforeEach((to, from, next) => {
	const menuStore = useMenu();
	const token = localStorage.getItem("token");
	if (to.name !== "login" && !token) next({ name: "login" });
	else next();
});
