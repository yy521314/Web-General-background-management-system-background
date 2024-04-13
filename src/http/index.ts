/*
 * @Author: 'yang' '1173278084@qq.com'
 * @Date: 2024-03-11 23:32:06
 * @LastEditors: 'yang' '1173278084@qq.com'
 * @LastEditTime: 2024-04-12 16:24:00
 * @FilePath: \Web-General-background-management-system-background\src\http\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import axios from "axios";

const instance = axios.create({
	baseURL: "http://127.0.0.1:3007",
	timeout: 6000,
	headers: { "Content-Type": "application/x-www-form-urlencoded" },
});

// 添加请求拦截器
instance.interceptors.request.use(
	function (config) {
		// 在发送请求之前做些什么
		return config;
	},
	function (error) {
		// 对请求错误做些什么
		return Promise.reject(error);
	}
);

// 添加响应拦截器
instance.interceptors.response.use(
	function (response) {
		// 对响应数据做点什么
		return response.data;
	},
	function (error) {
		// 对响应错误做点什么
		return Promise.reject(error);
	}
);

export default instance;
