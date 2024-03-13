<!--
 * @Author: 'yang' '1173278084@qq.com'
 * @Date: 2024-03-13 15:02:39
 * @LastEditors: 'yang' '1173278084@qq.com'
 * @LastEditTime: 2024-03-13 16:14:44
 * @FilePath: \Web-General-background-management-system-background\components\bread_cumb.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
	<div class="bread-crumb">
		<SvgIcon icon-name="location" class="bread-crumb-icon"></SvgIcon>
		<el-breadcrumb-item>{{ props.item.first }}</el-breadcrumb-item>
		<el-breadcrumb-item>{{ props.item.secend }}</el-breadcrumb-item>
	</div>
</template>

<script lang="ts" setup>
import SvgIcon from "@/components/SvgIcon.vue";
const props = defineProps(["item"]);
console.log(props);
</script>

<style lang="scss" scoped>
.bread-crumb {
	height: 40px;
	padding: 10px 30px;
	display: flex;
	align-items: center;
}

.bread-crumb-icon {
	margin-right: 4px;
}

:deep(.el-breadcrumb__item) {
	height: 30px;
	font-size: 14px;
	line-height: 30px;
}

:deep(.el-breadcrumb__inner) {
	font-weight: 500;
}
</style>
