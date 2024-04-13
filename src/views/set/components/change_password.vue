<template>
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
			<el-form-item label="请输入您的旧密码" prop="oldPassword">
				<el-input
					v-model="passwordData.oldPassword"
					show-password
					placeholder="请输入您的旧密码"
				/>
			</el-form-item>
			<el-form-item label="再次确认您的新密码" prop="newPassword">
				<el-input
					v-model="passwordData.newPassword"
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
				<el-button type="primary" @click="changeUserPassword">
					确定
				</el-button>
			</div>
		</template>
	</el-dialog>
</template>

<script lang="ts" setup>
import { reactive, ref, onBeforeUnmount } from "vue";
import { changePassword } from "@/api/userinfor";
import { ElMessage } from "element-plus";
import type { FormProps } from "element-plus";
import { useRouter } from "vue-router";
const labelPosition = ref("top");
const router = useRouter();
interface passwordData {
	oldPassword: String;
	newPassword: string;
	id: number | null;
}
const passwordData: passwordData = reactive({
	oldPassword: "",
	newPassword: "",
	id: null,
});
const rules = reactive({
	oldPassword: [
		{
			required: true,
			message: "请输入您的旧密码",
			trigger: "blur",
		},
	],
	newPassword: [
		{
			required: true,
			message: "请确认您的新密码",
			trigger: "blur",
		},
	],
});

const state = reactive({
	changePasswordDialog: false,
});
// 打开弹窗
const open = () => {
	state.changePasswordDialog = true;
};
// 重置密码; id  老 新密码
const changeUserPassword = async () => {
	if (passwordData.oldPassword && passwordData.newPassword) {
		const res = await changePassword(
			sessionStorage.getItem("id"),
			passwordData.oldPassword,
			passwordData.newPassword
		);
		if (res.status == 0) {
			ElMessage({
				message: "修改成功",
				type: "success",
			});
			state.changePasswordDialog = false;
			router.push("/");
		} else {
			ElMessage.error("修改失败，请检查密码是否有问题");
		}
	}
};

defineExpose({
	open,
});
onBeforeUnmount(() => {
	bus.all.clear();
});
</script>

<style lang="scss" scoped></style>
