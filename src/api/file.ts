/*
 * @Author: 'yang' '1173278084@qq.com'
 * @Date: 2024-04-15 17:12:34
 * @LastEditors: 'yang' '1173278084@qq.com'
 * @LastEditTime: 2024-04-15 17:12:55
 * @FilePath: \Web-General-background-management-system-background\src\api\file.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import instance from "@/http/index";

// 绑定上传者
export const bindFileAndUser = (name: string, url: any) => {
	return instance({
		url: "/file/bindFileAndUser",
		method: "POST",
		data: {
			name,
			url,
		},
	});
};

// 更新下载量
export const updateDownload = (download_number: number, id: number) => {
	return instance({
		url: "/file/updateDownload",
		method: "POST",
		data: {
			download_number,
			id,
		},
	});
};

// 下载文件
export const downloadFile = (id: number) => {
	return instance({
		url: "/file/downloadFile",
		method: "POST",
		data: {
			id,
		},
	});
};

// 获取文件列表
export const fileList = () => {
	return instance({
		url: "/file/fileList",
		method: "POST",
	});
};

// 获取文件列表总数
export const fileListLength = () => {
	return instance({
		url: "/file/fileListLength",
		method: "POST",
	});
};

// 监听换页返回数据 文件列表
export const returnFilesListData = (pager: number) => {
	return instance({
		url: "/file/returnFilesListData",
		method: "POST",
		data: {
			pager,
		},
	});
};

// searchFile
export const searchFile = (file_name: any) => {
	return instance({
		url: "/file/searchFile",
		method: "POST",
		data: {
			file_name,
		},
	});
};

// 删除文件
export const deleteFile = (id: number, file_name: string) => {
	return instance({
		url: "/file/deleteFile",
		method: "POST",
		data: {
			id,
			file_name,
		},
	});
};
