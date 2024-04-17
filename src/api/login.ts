/*
 * @Author: 'yang' '1173278084@qq.com'
 * @Date: 2024-03-12 17:10:47
 * @LastEditors: 'yang' '1173278084@qq.com'
 * @LastEditTime: 2024-04-16 23:20:18
 * @FilePath: \Web-General-background-management-system-background\src\api\login.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import instance from "@/http/index";
export const register = (data: any) => {
	const { account, password } = data;
	return instance({
		url: "/api/register",
		method: "POST",
		data: {
			account,
			password,
		},
	});
};

// 登录
export const login = (data: any) => {
	const { account, password } = data;
	return instance({
		url: "/api/login",
		method: "POST",
		data: {
			account,
			password,
		},
	});
};
// 忘记密码验证
export const verify = (data: any) => {
	const { account, email } = data;
	return instance({
		url: "/user/verifyAccountAndEmail",
		method: "POST",
		data: {
			account,
			email,
		},
	});
};
//密码重置
export const reset = (data: any) => {
	const { id, newPassword } = data;
	return instance({
		url: "/user/changePasswordInLogin",
		method: "POST",
		data: {
			id,
			newPassword,
		},
	});
};
//动态路由
export const returnMenuList = (id: number) => {
	return instance({
		url: "/api/returnMenuList",
		method: "POST",
		data: {
			id,
		},
	});
};
