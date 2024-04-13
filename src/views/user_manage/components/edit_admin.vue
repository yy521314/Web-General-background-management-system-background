<!--
 * @Author: 'yang' '1173278084@qq.com'
 * @Date: 2024-04-13 16:45:27
 * @LastEditors: 'yang' '1173278084@qq.com'
 * @LastEditTime: 2024-04-13 20:55:05
 * @FilePath: \Web-General-background-management-system-background\src\views\user_manage\components\create_admin.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
	<el-dialog
		v-model="dialogFormVisible"
		:title="title"
		width="600px"
		align-center
		draggable
	>
		<div class="dialog-content">
			<el-form
				ref="ruleFormRef"
				:model="formDataInfo"
				:rules="rules"
				label-width="100px"
			>
				<el-form-item label="账号" prop="account">
					<el-input v-model="formDataInfo.account" disabled />
				</el-form-item>
				<el-form-item label="姓名" prop="name">
					<el-input v-model="formDataInfo.name" />
				</el-form-item>
				<el-form-item label="性别" prop="sex">
					<el-select
						v-model="formDataInfo.sex"
						placeholder="请选择性别"
					>
						<el-option label="男" value="男" />
						<el-option label="女" value="女" />
					</el-select>
				</el-form-item>
				<el-form-item label="邮箱" prop="email">
					<el-input v-model="formDataInfo.email" />
				</el-form-item>
				<el-form-item label="部门" prop="department">
					<el-select
						v-model="formDataInfo.department"
						placeholder="请选择部门"
					>
						<el-option label="总裁办" value="总裁办" />
					</el-select>
				</el-form-item>
			</el-form>
		</div>
		<template #footer>
			<span class="dialog-footer">
				<el-button type="primary" @click="edit"> 确定 </el-button>
			</span>
		</template>
	</el-dialog>
</template>

<script lang="ts" setup>
import { reactive, ref, onBeforeUnmount } from "vue";
import { bus } from "@/utils/mitt";
import { getUserInfor, editAdmin } from "@/api/userinfor";
import { ElMessage } from "element-plus";

//title动态标题
const title = ref();
const emit = defineEmits(["success"]);
// 表格内容
interface FormData {
	id?: number | null;
	account: number | null;
	name: string;
	sex: string;
	email: string;
	department: string;
	identity: string;
}
const formDataInfo: FormData = reactive({
	id: null,
	account: null,
	name: "",
	sex: "",
	email: "",
	department: "",
	identity: "产品管理员",
});
//bus
//bus接收
bus.on("editId", async (id: number) => {
	const res = (await getUserInfor(id)) as any;
	formDataInfo.id = res.id;
	formDataInfo.account = res.account;
	formDataInfo.name = res.name;
	formDataInfo.sex = res.sex;
	formDataInfo.email = res.email;
	formDataInfo.department = res.department;
});
//规则
const rules = reactive({
	// account: [
	// 	{ required: true, message: "请输入管理员的注册账号", trigger: "blur" },
	// ],
	name: [{ required: true, message: "请输入管理员的名字", trigger: "blur" }],
	sex: [{ required: true, message: "请输入管理员的性别", trigger: "blur" }],
	email: [{ required: true, message: "请输入管理员的邮箱", trigger: "blur" }],
	department: [
		{ required: true, message: "请输入管理员的部门", trigger: "blur" },
	],
});
//修改信息
const edit = async () => {
	const res = await editAdmin(formDataInfo);
	if (res.status == 0) {
		ElMessage({
			message: "编辑管理员信息成功",
			type: "success",
		});
		bus.emit("adminDialogOff", 2);
		dialogFormVisible.value = false;
		emit("success");
	} else {
		ElMessage.error("编辑管理员信息失败");
		dialogFormVisible.value = false;
	}
};
// 弹窗开关
const dialogFormVisible = ref(false);
// 打开创建管理员的弹窗
const open = () => {
	dialogFormVisible.value = true;
};
defineExpose({
	open,
});
onBeforeUnmount(() => {
	bus.all.clear();
});
</script>

<style lang="scss" scoped>
.dialog-content {
	display: flex;
	padding: 20px 30px;
}

:deep(.el-form-item) {
	margin: 30px;
}
</style>
