/*
 * @Author: 'yang' '1173278084@qq.com'
 * @Date: 2024-04-14 15:28:31
 * @LastEditors: 'yang' '1173278084@qq.com'
 * @LastEditTime: 2024-04-14 15:28:38
 * @FilePath: \Web-General-background-management-system-background\src\utils\operation.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { operationLog } from "@/api/log";

export const tracking = async (
	module: string,
	operation_person: string,
	operation_object: string,
	operation_level: string,
	operation_status?: string
) => {
	if (module == "管理员") {
		// 操作内容
		let operation_content = `对管理员'${operation_object}'进行了删除操作`;
		await operationLog(
			operation_person,
			operation_content,
			operation_level
		);
	}
	if (module == "产品") {
		// 操作内容
		let operation_content = `对产品'${operation_object}'进行了审核操作，审核结果为'${operation_status}'`;
		await operationLog(
			operation_person,
			operation_content,
			operation_level
		);
	}
};
