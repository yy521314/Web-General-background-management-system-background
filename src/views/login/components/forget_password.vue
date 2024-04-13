<!--
 * @Author: 'yang' '1173278084@qq.com'
 * @Date: 2024-03-11 23:32:06
 * @LastEditors: 'yang' '1173278084@qq.com'
 * @LastEditTime: 2024-04-13 21:45:48
 * @FilePath: \Web-General-background-management-system-background\src\views\login\components\forget_password.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
	<!-- 忘记密码 -->
	<el-dialog
		v-model="state.forgetPasswordDialog"
		title="忘记密码"
		width="400px"
	>
		<el-form
			:model="form"
			label-width="auto"
			style="max-width: 600px"
			class="login-form"
			label="label position"
			:rules="rules"
		>
			<el-form-item label="请输入您的登录账号" prop="account">
				<el-input
					v-model="fotgetData.account"
					placeholder="请输入您的登录账号"
				/>
			</el-form-item>
			<el-form-item label="请输入您的个人邮箱" prop="email">
				<el-input
					v-model="fotgetData.email"
					placeholder="请输入您的个人邮箱"
				/>
			</el-form-item>
		</el-form>
		<!-- 底部内容 -->
		<template #footer>
			<div class="dialog-footer">
				<el-button @click="state.forgetPasswordDialog = false"
					>取消</el-button
				>
				<el-button type="primary" @click="verifyAccount">
					下一步
				</el-button>
			</div>
		</template>
	</el-dialog>
	<!-- 修该密码 -->
	<el-dialog
		v-model="state.changePasswordDialog"
		title="修改密码"
		width="400px"
	>
		<el-form
			:model="form"
			label-width="auto"
			style="max-width: 600px"
			class="login-form"
			label="label position"
			:rules="rules"
		>
			<el-form-item label="新密码" prop="password">
				<el-input
					v-model="fotgetData.password"
					show-password
					placeholder="请输入您的新密码"
				/>
			</el-form-item>
			<el-form-item label="再次确认您的新密码" prop="repassword">
				<el-input
					v-model="fotgetData.repassword"
					show-password
					placeholder="再次确认您的新密码"
				/>
			</el-form-item>
		</el-form>
		<!-- 底部内容 -->
		<template #footer>
			<div class="dialog-footer">
				<el-button @click="state.changePasswordDialog = false"
					>取消</el-button
				>
				<el-button type="primary" @click="resetPassword">
					确定
				</el-button>
			</div>
		</template>
	</el-dialog>
</template>
<script lang="ts" setup>
import { reactive, ref, onBeforeUnmount } from "vue";
import { verify, reset } from "@/api/login";
import { ElMessage } from "element-plus";
import type { FormProps } from "element-plus";
const labelPosition = ref("top");
interface fotgetData {
	account: number | null;
	email: string;
	password: String;
	repassword: string;
}
const fotgetData: fotgetData = reactive({
	account: null,
	email: "",
	password: "",
	repassword: "",
});
const rules = reactive({
	account: [
		{
			required: true,
			message: "请输入您的注册账号",
			trigger: "blur",
		},
	],
	email: [
		{
			required: true,
			message: "请输入您的注册邮箱",
			trigger: "blur",
		},
	],
	password: [
		{
			required: true,
			message: "请输入您的新密码",
			trigger: "blur",
		},
	],
	repassword: [
		{
			required: true,
			message: "请确认您的新密码",
			trigger: "blur",
		},
	],
});

const state = reactive({
	forgetPasswordDialog: false,
	changePasswordDialog: false,
});
// 打开弹窗
const open = () => {
	state.forgetPasswordDialog = true;
};
//下一步修该密码密码弹窗
const verifyAccount = async () => {
	const res = (await verify(fotgetData)) as any;
	console.log(res);
	if (res.status == 0) {
		ElMessage({
			message: "验证成功",
			type: "success",
		});
		// localStorage.setItem 存放到浏览器的本地存储空间
		// sessionStorage.setItem 存放到浏览器的会话存储空间
		localStorage.setItem("id", res.id);
		state.forgetPasswordDialog = false;
		state.changePasswordDialog = true;
	} else {
		ElMessage.error("验证失败");
	}
};
// 重置密码;
const resetPassword = async () => {
	if (fotgetData.password == fotgetData.repassword) {
		const newPassword = fotgetData.password;
		const id = localStorage.getItem("id");
		const res = await reset({ newPassword, id });
		if (res.status == 0) {
			ElMessage({
				message: "修改成功",
				type: "success",
			});
			state.changePasswordDialog = false;
		} else {
			ElMessage.error("修改失败，密码需6-12位字母+数字");
		}
	} else {
		ElMessage.error("修改失败，检查密码是否一致");
	}
};

defineExpose({
	open,
});
</script>

<style lang="scss" scoped></style>
