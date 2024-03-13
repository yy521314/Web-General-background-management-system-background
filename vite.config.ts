/*
 * @Author: 'yang' '1173278084@qq.com'
 * @Date: 2024-03-10 22:37:20
 * @LastEditors: 'yang' '1173278084@qq.com'
 * @LastEditTime: 2024-03-13 16:11:32
 * @FilePath: \Web-General-background-management-system-background\vite.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { createSvgIconsPlugin } from "vite-plugin-svg-icons";

import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		createSvgIconsPlugin({
			iconDirs: [resolve(process.cwd(), "src/assets/svg")],
			symbolId: "icon-[dir]-[name]",
		}),
	],
	resolve: {
		alias: {
			"@": fileURLToPath(new URL("./src", import.meta.url)),
		},
	},
	server: {
		port: 8080, //默认端口号
		open: true, //允许自动打开浏览器
		cors: true, //允许跨域
	},
});
