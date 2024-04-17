/*
 * @Author: 'yang' '1173278084@qq.com'
 * @Date: 2024-03-17 22:03:10
 * @LastEditors: 'yang' '1173278084@qq.com'
 * @LastEditTime: 2024-04-16 15:33:34
 * @FilePath: \Web-General-background-management-system-background\src\api\setting.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import instance from "@/http/index";
//获取所有轮播图
export const getAllSwiper = () => {
	return instance({
		url: "/set/getAllSwiper",
		method: "POST",
	});
};
//获取公司名称
export const getCompanyName = () => {
	return instance({
		url: "/set/getCompanyName",
		method: "POST",
	});
};
//修该公司名称
export const changeCompanyName = (set_value: string) => {
	return instance({
		url: "/set/changeCompanyName",
		method: "POST",
		data: {
			set_value,
		},
	});
};
//编辑公司名称
export const changeCompanyIntroduce = (set_text: string, set_name: string) => {
	return instance({
		url: "/set/changeCompanyIntroduce",
		method: "POST",
		data: {
			set_text,
			set_name,
		},
	});
};
//获取公司介绍
export const getCompanyIntroduce = (set_name: string) => {
	return instance({
		url: "/set/getCompanyIntroduce",
		method: "POST",
		data: {
			set_name,
		},
	});
};
//获取公司所有信息
export const getAllCompanyIntroduce = (set_name: string) => {
	return instance({
		url: "/set/getAllCompanyIntroduce",
		method: "POST",
	});
};

// 部门设置
export const setDepartment = (data: any) => {
	return instance({
		url: "/set/setDepartment",
		method: "POST",
		data: {
			set_value: data,
		},
	});
};

// 获取部门
export const getDepartment = () => {
	return instance({
		url: "/set/getDepartment",
		method: "POST",
	});
};

// 产品设置
export const setProduct = (data: any) => {
	return instance({
		url: "/set/setProduct",
		method: "POST",
		data: {
			set_value: data,
		},
	});
};

// 获取产品
export const getProduct = () => {
	return instance({
		url: "/set/getProduct",
		method: "POST",
	});
};
