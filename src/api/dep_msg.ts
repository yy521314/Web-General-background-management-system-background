/*
 * @Author: 'yang' '1173278084@qq.com'
 * @Date: 2024-04-15 22:10:45
 * @LastEditors: 'yang' '1173278084@qq.com'
 * @LastEditTime: 2024-04-15 22:10:51
 * @FilePath: \Web-General-background-management-system-background\src\api\dep_msg.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import instance from "@/http/index";

// 获取部门消息 id list
export const getDepartmentMsg = (id: number, department: string) => {
	return instance({
		url: "/dm/getDepartmentMsg",
		method: "POST",
		data: {
			id,
			department,
		},
	});
};

// 获取部门消息
export const getDepartmentMsgList = (department: string) => {
	return instance({
		url: "/dm/getDepartmentMsgList",
		method: "POST",
		data: {
			department,
		},
	});
};

// 返回用户的阅读列表及状态
export const getReadListAndStatus = (id: number) => {
	return instance({
		url: "/dm/getReadListAndStatus",
		method: "POST",
		data: {
			id,
		},
	});
};

// 用户点击消息后,对read_list内的数据进行删减
export const clickDelete = (readId: number, id: number) => {
	return instance({
		url: "/dm/clickDelete",
		method: "POST",
		data: {
			readId,
			id,
		},
	});
};

// 把新发布文章的id插入到当前所属部门的用户的read_list中
export const changeUserReadList = (newId: number, department: string) => {
	return instance({
		url: "/dm/changeUserReadList",
		method: "POST",
		data: {
			newId,
			department,
		},
	});
};

// 把删除的文章的id从当前所属部门的用户的read_list中删除
export const changeUserReadListButDelete = (
	deleteId: number,
	department: string
) => {
	return instance({
		url: "/dm/changeUserReadListButDelete",
		method: "POST",
		data: {
			deleteId,
			department,
		},
	});
};
