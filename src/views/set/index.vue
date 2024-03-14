<!--
 * @Author: 'yang' '1173278084@qq.com'
 * @Date: 2024-03-13 14:48:23
 * @LastEditors: 'yang' '1173278084@qq.com'
 * @LastEditTime: 2024-03-14 23:18:40
 * @FilePath: \Web-General-background-management-system-background\src\views\set\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->

<template>
	<breadCrumb ref="breadcrumb" :item="item"></breadCrumb>
	<div class="common-wrapp">
		<div class="common-content">
			<el-tabs
				v-model="activeName"
				class="demo-tabs"
				@tab-click="handleClick"
			>
				<el-tab-pane label="账号详情" name="first"
					><div class="account-infor-wrapped">
						<span>用户头像:</span>
						<div class="account-infor-content">
							<el-upload
								class=""
								action="http://127.0.0.1:3007/user/uploadAvatar"
								:show-file-list="false"
								:on-success="handleAvatarSuccess"
								:before-upload="beforeAvatarUpload"
							>
								<img
									v-if="userStore.imageUrl"
									:src="userStore.imageUrl"
									class="avatar"
								/>
								<el-icon v-else class="avatar-uploader-icon"
									><Plus
								/></el-icon>
							</el-upload>
						</div>
					</div>
					<div class="account-infor-wrapped">
						<span>用户账号:</span>
						<div class="account-infor-content">
							<el-input
								v-model="userStore.account"
								disabled
							></el-input>
						</div>
					</div>
					<div class="account-infor-wrapped">
						<span>用户密码:</span>
						<div class="account-infor-content">
							<el-button
								type="primary"
								@click="openChangePassword"
								>修该密码</el-button
							>
						</div>
					</div>
					<div class="account-infor-wrapped">
						<span>用户性名:</span>
						<div class="account-infor-content">
							<el-input v-model="userStore.name"></el-input>
							<div class="account-infor-button">
								<el-button
									type="primary"
									large="small"
									@click="saveName"
									>保存</el-button
								>
							</div>
						</div>
					</div>
					<div class="account-infor-wrapped">
						<span>用户性别:</span>
						<div class="account-infor-content">
							<el-select v-model="userStore.sex">
								<el-option label="男" value="男"></el-option>
								<el-option label="女" value="女"></el-option>
							</el-select>
							<div class="account-infor-button">
								<el-button
									type="primary"
									large="small"
									@click="saveSex"
									>保存</el-button
								>
							</div>
						</div>
					</div>
					<div class="account-infor-wrapped">
						<span>用户身份:</span>
						<div class="account-infor-content">
							<el-input
								v-model="userStore.identity"
								disabled
							></el-input>
						</div>
					</div>
					<div class="account-infor-wrapped">
						<span>用户部门:</span>
						<div class="account-infor-content">
							<el-input
								v-model="userStore.department"
								disabled
							></el-input>
						</div>
					</div>
					<div class="account-infor-wrapped">
						<span>用户邮箱:</span>
						<div class="account-infor-content">
							<el-input v-model="userStore.email"></el-input>
							<div class="account-infor-button">
								<el-button
									type="primary"
									large="small"
									@click="saveEmail"
									>保存</el-button
								>
							</div>
						</div>
					</div>
				</el-tab-pane>

				<el-tab-pane label="公司信息" name="second"
					>公司信息</el-tab-pane
				>
				<el-tab-pane label="首页管理" name="third"
					>首页管理</el-tab-pane
				>
				<el-tab-pane label="其他设置" name="fourth"
					>其他设置</el-tab-pane
				>
			</el-tabs>
		</div>
	</div>
	<change ref="changeP"></change>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
import breadCrumb from "@/components/bread_crumb.vue";
import type { TabsPaneContext } from "element-plus";
import { ElMessage } from "element-plus";
import { Plus } from "@element-plus/icons-vue";
import type { UploadProps } from "element-plus";
import { reset } from "@/api/login";
import { useUserInfor } from "@/stores/userinfor";
import { es } from "element-plus/es/locale";
import { type } from "os";
import { bindAccount } from "@/api/userinfor";
import change from "./components/change_password.vue";
import { changeName, changeSex, changeEmail } from "@/api/userinfor";
const userStore = useUserInfor();
const changeP = ref();
//头像上传成功的函数
const handleAvatarSuccess: UploadProps["onSuccess"] = (response) => {
	if (response.status == 0) {
		userStore.$patch({
			imageUrl: response.url,
		});
		ElMessage({
			message: "更新成功",
			type: "success",
		});
		(async () => {
			await bindAccount(userStore.account, response.onlyId, response.url);
		})();
	} else {
		ElMessage.error("更新头像失败！请重新上传");
	}
};
// 头像上传之前的函数
const beforeAvatarUpload: UploadProps["beforeUpload"] = (rawFile) => {
	if (rawFile.type !== "image/jpeg") {
		ElMessage.error("Avatar picture must be JPG format!");
		return false;
	} else if (rawFile.size / 1024 / 1024 > 2) {
		ElMessage.error("Avatar picture size can not exceed 2MB!");
		return false;
	}
	return true;
};
//账号
const AccountDetailData = reactive({
	account: "",
	identity: "",
	department: "",
	name: "",
	sex: "",
	eamil: "",
});

//默认打开标签页
const activeName = ref("first");
const breadcrumb = ref();
//面包屑
const item = ref({
	first: "系统设置",
});
//修该密码弹窗
const openChangePassword = () => {
	changeP.value.open();
};
//修改性名
const saveName = async () => {
	const res = await changeName(sessionStorage.getItem("id"), userStore.name);
	if (res.data.status == 0) {
		ElMessage({
			message: "更新成功",
			type: "success",
		});
	} else {
		ElMessage.error("修改失败！请重新入");
	}
};
//修改性别
const saveSex = async () => {
	const res = await changeSex(sessionStorage.getItem("id"), userStore.sex);
	console.log(res);

	if (res.data.status == 0) {
		ElMessage({
			message: "更新成功",
			type: "success",
		});
	} else {
		ElMessage.error("修改失败！请重新入");
	}
};
//修改邮箱
const saveEmail = async () => {
	const res = await changeEmail(
		sessionStorage.getItem("id"),
		userStore.email
	);
	if (res.data.status == 0) {
		ElMessage({
			message: "更新成功",
			type: "success",
		});
	} else {
		ElMessage.error("修改失败！请检查是否有格式问题");
	}
};
</script>

<style lang="scss" scoped>
// 标签样式
.demo-tabs > .el-tabs__content {
	padding: 32px;
	color: #6b778c;
	font-size: 32px;
	font-weight: 600;
}
//外壳
.common-wrapp {
	padding: 8px;
	background: #f5f5f5;
	height: calc(100vh - 85px);
	//内容
	.common-content {
		padding: 0 10px;
		height: 100%;
		background: #fff;
		.account-infor-wrapped {
			display: flex;
			align-items: center;
			padding-left: 50px;
			margin-bottom: 24px;
			.account-infor-content {
				display: flex;
				margin-left: 24px;
				margin-right: 16px;
				.account-infor-button {
					margin-left: 20px;
				}
				.el-upload {
					img {
						width: 200px;
						height: 200px;
					}
				}
				.el-select {
					width: 60px;
				}
			}
		}
	}
}
//上传头像
.avatar-uploader .avatar {
	width: 178px;
	height: 178px;
	display: block;
}
</style>
<style>
.avatar-uploader .el-upload {
	border: 1px dashed var(--el-border-color);
	border-radius: 6px;
	cursor: pointer;
	position: relative;
	overflow: hidden;
	transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
	border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
	font-size: 28px;
	color: #8c939d;
	width: 178px;
	height: 178px;
	text-align: center;
}
</style>
