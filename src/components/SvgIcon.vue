<!--
 * @Author: 'yang' '1173278084@qq.com'
 * @Date: 2024-03-13 15:57:46
 * @LastEditors: 'yang' '1173278084@qq.com'
 * @LastEditTime: 2024-03-13 16:03:15
 * @FilePath: \Web-General-background-management-system-background\src\components\SvgIcon.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
	<svg
		aria-hidden="true"
		:style="{ width: size + 'px', height: size + 'px' }"
	>
		<use :xlink:href="symbolId" :fill="color" />
	</svg>
</template>
<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
	iconName: {
		type: String,
		required: true,
	},
	color: {
		type: String,
		default: "",
	},
	size: {
		type: [Number, String],
		default: 16,
	},
});
const symbolId = computed(() => `#icon-${props.iconName}`);
</script>

<style scoped>
.svg-icon {
	fill: currentColor;
	vertical-align: middle;
}
</style>
