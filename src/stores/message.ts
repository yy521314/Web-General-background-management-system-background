/*
 * @Author: 'yang' '1173278084@qq.com'
 * @Date: 2024-04-15 22:11:43
 * @LastEditors: 'yang' '1173278084@qq.com'
 * @LastEditTime: 2024-04-15 22:11:55
 * @FilePath: \Web-General-background-management-system-background\src\stores\message.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineStore } from "pinia";
import { getReadListAndStatus, getDepartmentMsgList } from "@/api/dep_msg";
import { ref } from "vue";

// 使用了setup写法
export const useMsg = defineStore(
	"messageinfor",
	() => {
		const read_list = ref<number[]>([]);
		const msg_list = ref<any[]>([]);

		const returnReadList = async (id: number) => {
			read_list.value = [];
			msg_list.value = [];

			const res = (await getReadListAndStatus(id)) as any;
			let department: string | null = localStorage.getItem("department");
			read_list.value = JSON.parse(res[0].read_list)! as number[];
			msg_list.value = (await getDepartmentMsgList(
				department as string
			)) as any;
		};

		return {
			read_list,
			msg_list,
			returnReadList,
		};
	},
	{
		persist: true,
	}
);
