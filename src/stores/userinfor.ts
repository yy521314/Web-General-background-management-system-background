/*
 * @Author: 'yang' '1173278084@qq.com'
 * @Date: 2024-03-13 18:58:46
 * @LastEditors: 'yang' '1173278084@qq.com'
 * @LastEditTime: 2024-04-17 20:53:28
 * @FilePath: \Web-General-background-management-system-background\src\stores\userinfor.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { defineStore } from "pinia";
import { getUserInfor } from "@/api/userinfor";
import { userInfo } from "os";
export const useUserInfor = defineStore("userinfor", {
	// 为了完整类型推理，推荐使用箭头函数
	state: () => {
		return {
			// 所有这些属性都将自动推断出它们的类型
			imageUrl: "",
			name: "",
			sex: "",
			department: "",
			identity: "",
			account: "",
			email: "",
		};
	},
	actions: {
		async userInfo(id: number) {
			const res = await getUserInfor(id);
			this.imageUrl = res.image_url;
			this.name = res.name;
			this.sex = res.sex;
			this.department = res.department;
			this.identity = res.identity;
			this.account = res.account;
			this.email = res.email;
		},
	},
	persist: {
		enabled: true,
		key: "userinfor",
	},
});
