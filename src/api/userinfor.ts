import instance from "@/http/index";
//获取用户信息
export const getUserInfor = (id: number) => {
	return instance({
		url: "/user/getUserInfo",
		method: "POST",
		data: {
			id,
		},
	});
};
//绑定账号
export const bindAccount = (account: any, onlyId: any, url: any) => {
	return instance({
		url: "/user/bindAccount",
		method: "POST",
		data: {
			account,
			onlyId,
			url,
		},
	});
};
//修该密码
export const changePassword = (
	id: number,
	oldPassword: string,
	newPassword: string
) => {
	return instance({
		url: "/user/changePassword",
		method: "POST",
		data: {
			oldPassword,
			newPassword,
			id,
		},
	});
};
//修该性名
export const changeName = (id: number, name: string) => {
	return instance({
		url: "/user/changeName",
		method: "POST",
		data: {
			id,
			name,
		},
	});
};
//修该性别
export const changeSex = (id: number, sex: string) => {
	return instance({
		url: "/user/changeSex",
		method: "POST",
		data: {
			id,
			sex,
		},
	});
};
//修该邮箱
export const changeEmail = (id: number, email: any) => {
	return instance({
		url: "/user/changeEmail",
		method: "POST",
		data: {
			id,
			email,
		},
	});
};
