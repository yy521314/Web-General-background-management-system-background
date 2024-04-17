/*
 * @Author: 'yang' '1173278084@qq.com'
 * @Date: 2024-04-15 22:50:56
 * @LastEditors: 'yang' '1173278084@qq.com'
 * @LastEditTime: 2024-04-17 21:17:05
 * @FilePath: \Web-General-background-management-system-background\src\stores\menu.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineStore } from "pinia";
import router from "@/router";
import { ref } from "vue";

// 使用了setup写法
export const useMenu = defineStore(
	"menuInfo",
	() => {
		const menuData = ref<any[]>([]);
		// 函数相当于传统写法的action
		const setRouter = (arr: any) => {
			function loadComponent(url: string) {
				let Module = import.meta.glob("@/views/**/*.vue");
				return Module[`/src/views/${url}.vue`];
			}
			function compilerMenu(arr: any) {
				if (!arr) {
					return;
				}
				menuData.value = arr;
				arr.forEach((item) => {
					let rts = {
						name: item.name,
						path: item.path,
						meta: item.meta,
						component: item.component,
					};
					//判断子路由继续迭代操作
					if (item.children && item.children.length) {
						compilerMenu(item.children);
					}
					if (!item.children) {
						let path = loadComponent(item.component);
						rts.component = path;
						router.addRoute("menu", rts);
					}
				});
			}
			compilerMenu(arr as any);
		};

		const addRouter = () => {
			setRouter(menuData.value);
		};

		return {
			addRouter,
			menuData,
			setRouter,
		};
	},
	{
		persist: true,
	}
);
