<!--
 * @Author: 'yang' '1173278084@qq.com'
 * @Date: 2024-03-11 23:32:06
 * @LastEditors: 'yang' '1173278084@qq.com'
 * @LastEditTime: 2024-03-17 20:54:06
 * @FilePath: \Web-General-background-management-system-background\src\views\home\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
	<breadCrumb ref="breadcrumb" :item="item"></breadCrumb>
	<div class="home-wrapped">
		<!-- 轮播图 -->
		<div class="swiper-wrapped">
			<el-carousel interval="4000" height="280px" type="card">
				<el-carousel-item v-for="item in 4" :key="item">
					<h3 class="small justify-center" text="2xl">
						{{ item }}
					</h3>
				</el-carousel-item>
			</el-carousel>
		</div>
		<!-- 栅格布局 -->
		<div class="layout-wrapped">
			<el-row :gutter="20">
				<el-col :span="6"
					><div class="company-message-area">
						<span>公司介绍</span>
					</div></el-col
				>
				<el-col :span="6"
					><div class="company-message-area">
						<span>公司架构</span>
					</div></el-col
				>
				<el-col :span="6"
					><div class="company-message-area">
						<span>公司战略</span>
					</div></el-col
				>
				<el-col :span="6"
					><div class="company-message-area">
						<span>高层介绍</span>
					</div></el-col
				>
			</el-row>
		</div>
		<!-- 表格外壳 -->
		<div class="two-table-wrapped">
			<div class="company-notice">
				<span class="title">公司公告</span>
				<el-table
					:data="tableData"
					style="width: 100%"
					:show-header="false"
				>
					<el-table-column prop="date" label="Date" width="180" />
					<el-table-column prop="name" label="Name" width="180" />
					<el-table-column prop="address" label="Address" />
				</el-table>
			</div>
			<!-- 系统消息 -->
			<div class="system-message">
				<span class="title">系统消息</span>
				<el-table
					:data="tableData"
					style="width: 100%"
					:show-header="false"
				>
					<el-table-column prop="date" label="Date" width="180" />
					<el-table-column prop="name" label="Name" width="180" />
					<el-table-column prop="address" label="Address" />
				</el-table>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import breadCrumb from "@/components/bread_crumb.vue";
// 面包屑
const breadcrumb = ref();
const item = ref({
	first: "首页",
});
const tableData = [
	{
		date: "2016-05-03",
		name: "Tom",
		address: "No. 189, Grove St, Los Angeles",
	},
];
</script>

<style lang="scss" scoped>
@mixin table-class {
	height: 232px;
	width: 48%;
	display: flex;
	flex-direction: column;
}
.home-wrapped {
	padding: 8px;
	height: calc(100vh - 101px);
	background: #f5f5f5;
	display: flex;
	flex-direction: column;
	// 轮播图
	.swiper-wrappe {
		padding: 0 20px;
		background: #fff;
		margin-bottom: 8px;
		.swiper {
			width: 100%;
			height: 100%;
		}
	}
	// 栅格布局
	.layout-wrapped {
		padding: 8px;
		margin-bottom: 8px;
		background: #fff;
		// 公司信息区域
		.company-message-area {
			background: #f5f5f5;
			height: 200px;
			padding: 8px;
			cursor: pointer;

			span {
				border-bottom: 1px solid #409eff;
				font-size: 14px;
			}

			.company-introduce {
				text-indent: 24px;
				font-size: 14px;
				overflow: hidden;
				text-overflow: ellipsis;
				-webkit-line-clamp: 3;
				display: -webkit-box;
				-webkit-box-orient: vertical;
			}
		}
		.company-message-area:hover {
			cursor: pointer;
			background-color: #eef5ff;
		}
	}
	// 表格外壳
	.two-table-wrapped {
		height: 232px;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-around;
		background: #fff;

		// 公司公告
		.company-notice {
			@include table-class;
		}

		// 系统消息
		.system-message {
			@include table-class;
		}

		.title {
			font-size: 14px;
			margin-bottom: 5px;
			border-bottom: 1px solid #ea0709;
		}
	}
}
//轮播图
.el-carousel__item h3 {
	color: #475669;
	opacity: 0.75;
	line-height: 150px;
	margin: 0;
	text-align: center;
}

.el-carousel__item:nth-child(2n) {
	background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
	background-color: #d3dce6;
}
//栅格布局
.el-row {
	margin-bottom: 20px;
}
.el-row:last-child {
	margin-bottom: 0;
}
.el-col {
	border-radius: 4px;
}

.grid-content {
	border-radius: 4px;
	min-height: 36px;
}
</style>
