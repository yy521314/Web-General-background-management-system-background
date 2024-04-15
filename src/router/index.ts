/*
 * @Author: 'yang' '1173278084@qq.com'
 * @Date: 2024-03-10 22:37:20
 * @LastEditors: 'yang' '1173278084@qq.com'
 * @LastEditTime: 2024-04-15 22:05:51
 * @FilePath: \Web-General-background-management-system-background\src\router\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createRouter, createWebHistory } from "vue-router";

const routes = [
	{
		path: "/",
		redirect: "/login",
	},
	{
		name: "login",
		path: "/login",
		component: () => import("@/views/login/index.vue"),
	},
	{
		name: "menu",
		path: "/menu",
		component: () => import("@/views/menu/index.vue"),
		children: [
			{
				name: "home",
				path: "/home",
				component: () => import("@/views/home/index.vue"),
			},
			{
				name: "set",
				path: "/set",
				component: () => import("@/views/set/index.vue"),
			},
			{
				name: "overview",
				path: "/overview",
				component: () => import("@/views/overview/index.vue"),
			},
			{
				name: "product_manage",
				path: "/product_manage",
				component: () =>
					import("@/views/user_manage/product_manage/index.vue"),
			},
			{
				name: "message_manage",
				path: "/message_manage",
				component: () =>
					import("@/views/user_manage/message_manage/index.vue"),
			},
			{
				name: "user_list",
				path: "/user_list",
				component: () =>
					import("@/views/user_manage/user_list/index.vue"),
			},
			{
				name: "users_manage",
				path: "/users_manage",
				component: () =>
					import("@/views/user_manage/users_manage/index.vue"),
			},
			{
				name: "product_manage_list",
				path: "/product_manage_list",
				component: () =>
					import("@/views/product/product_manage_list/index.vue"),
			},
			{
				name: "out_product_manage_list",
				path: "/out_product_manage_list",
				component: () =>
					import("@/views/product/out_product_manage_list/index.vue"),
			},
			{
				name: "message_list",
				path: "/message_list",
				component: () =>
					import("@/views/message/message_list/index.vue"),
			},
			{
				name: "recycle",
				path: "/recycle",
				component: () => import("@/views/message/recycle/index.vue"),
			},
			{
				name: "file",
				path: "/file",
				component: () => import("@/views/file/index.vue"),
			},
		],
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
