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
					v-model="fotgetData.password"
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
				<el-button type="primary" @click="openChangepassword">
					确定
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
					v-model="fotgetData.account"
					placeholder="请输入您的新密码"
				/>
			</el-form-item>
			<el-form-item label="再次确认您的新密码" prop="repassword">
				<el-input
					v-model="fotgetData.password"
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
				<el-button type="primary" @click="openChangepassword">
					下一步
				</el-button>
			</div>
		</template>
	</el-dialog>
</template>
<script lang="ts" setup>
import { reactive, ref } from "vue";
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
const openChangepassword = () => {
	state.forgetPasswordDialog = false;
	state.changePasswordDialog = true;
};

defineExpose({
	open,
});
</script>

<style lang="scss" scoped></style>
