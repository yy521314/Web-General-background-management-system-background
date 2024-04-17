<template>
	<div class="common-layout">
		<el-container class="abc">
			<el-aside width="250px">
				<el-menu class="el-menu-vertical-demo" router>
					<div class="title">
						<img
							src="@/../public/tubiao.jpg"
							alt=""
							class="img_img"
						/>
						<p>温馨客栈管理系统</p>
					</div>
					<!-- 菜单栏 -->
					<el-menu-item index="home">
						<el-icon><House /></el-icon>
						<span>首页 </span>
					</el-menu-item>
					<el-menu-item
						index="overview"
						v-if="userStore.identity == '超级管理员'"
					>
						<el-icon><icon-menu /></el-icon>
						<span>系统概览 </span>
					</el-menu-item>
					<!-- 分层菜单用户管理  -->
					<el-sub-menu
						index="3"
						v-if="
							userStore.identity == '超级管理员' ||
							userStore.identity == '用户管理员'
						"
					>
						<template #title>
							<el-icon><User /></el-icon>
							<span>用户管理</span>
						</template>
						<el-menu-item-group
							title="管理员管理"
							v-if="userStore.identity == '超级管理员'"
						>
							<el-menu-item index="product_manage"
								>产品管理员</el-menu-item
							>
							<el-menu-item index="users_manage"
								>用户管理员</el-menu-item
							>
							<el-menu-item index="message_manage"
								>消息管理员</el-menu-item
							>
						</el-menu-item-group>
						<el-menu-item-group title="用户管理">
							<el-menu-item index="user_list"
								>用户列表</el-menu-item
							>
						</el-menu-item-group>
					</el-sub-menu>
					<!-- 产品管理 -->
					<el-sub-menu
						index="4"
						v-if="
							userStore.identity == '超级管理员' ||
							userStore.identity == '产品管理员' ||
							userStore.identity == '用户'
						"
					>
						<template #title>
							<el-icon><HomeFilled /></el-icon>
							<span>产品管理</span>
						</template>
						<el-menu-item-group title="入库出库管理">
							<el-menu-item index="product_manage_list"
								>产品列表</el-menu-item
							>
						</el-menu-item-group>
						<el-menu-item-group title="出库数据">
							<el-menu-item index="out_product_manage_list"
								>出库列表清单</el-menu-item
							>
						</el-menu-item-group>
					</el-sub-menu>
					<!-- 消息管理 -->
					<el-sub-menu
						index="5"
						v-if="
							userStore.identity == '消息管理员' ||
							userStore.identity == '超级管理员'
						"
					>
						<template #title>
							<el-icon><ChatRound /></el-icon>
							<span>消息管理</span>
						</template>

						<el-menu-item index="message_list"
							>消息列表</el-menu-item
						>

						<el-menu-item index="recycle">回收站</el-menu-item>
					</el-sub-menu>
					<el-menu-item
						index="file"
						v-if="userStore.identity == '超级管理员'"
					>
						<el-icon><Memo /></el-icon>
						<span>合同管理</span>
					</el-menu-item>
					<el-menu-item
						index="operation_log"
						v-if="userStore.identity == '超级管理员'"
					>
						<el-icon><icon-menu /></el-icon>
						<span>操作日志</span>
					</el-menu-item>
					<el-menu-item
						index="login_log"
						v-if="userStore.identity == '超级管理员'"
					>
						<el-icon><Upload /></el-icon>
						<span>登录日志</span>
					</el-menu-item>
					<el-menu-item index="set">
						<el-icon><Setting /></el-icon>
						<span>系统设置 </span>
					</el-menu-item>
				</el-menu>
			</el-aside>
			<el-container>
				<el-header>
					<span class="hander-left-content"
						>尊敬的 {{ userStore.name }} 欢迎您来到温馨客栈！</span
					>
					<div class="hander-right-content">
						<el-avatar :size="24" :src="userStore.imageUrl" />
						<el-dropdown>
							<span class="el-dropdown-link"> 设置 </span>
							<template #dropdown>
								<el-dropdown-menu>
									<el-dropdown-item @click="goLogin"
										>退出登录</el-dropdown-item
									>
								</el-dropdown-menu>
							</template>
						</el-dropdown>
					</div>
				</el-header>
				<el-main>
					<router-view></router-view>
				</el-main>
			</el-container>
		</el-container>
	</div>
</template>

<script lang="ts" setup>
import { Menu as IconMenu } from "@element-plus/icons-vue";
import { useRouter } from "vue-router";
const router = useRouter();
import { useUserInfor } from "@/stores/userinfor";
const userStore = useUserInfor();

const goLogin = () => {
	router.push("login");
};
</script>

<style lang="scss" scoped>
.common-layout {
	width: 87vw;
}
.el-container {
	width: 50rem;
}
.el-aside {
	height: 100vh;
	background: #2b303b;
	overflow: hidden;
	width: 250px;
	.title {
		display: flex;
		.img_img {
			width: 40px;
			height: 40px;
		}
		p {
			line-height: 40px;
		}
		padding: 15px;
		display: flex;
		justify-content: center;
		color: #fff;
		background: #272c35;
		width: 100%;
	}
	.el-menu-item {
		width: 20vh;
		color: #fff;
	}
	// 菜单
	.el-menu {
		background: #2b303b;
		width: 250px;
		height: 100vh;
		border-right: 0;
	}
	.el-menu-item {
		width: 250px;
	}
}
.el-dropdown-link {
	cursor: pointer;
}
.el-header {
	width: 73vw;
	display: flex;
	height: 55px;
	background: #262f3e;
	color: #c1c6c8;
	align-items: center;
	justify-content: space-between;

	// 欢迎语
	.hander-left-content {
		font-size: 14px;
	}
	.hander-right-content {
		width: 180px;
		display: flex;
		justify-content: flex-end;
		.el-dropdown-link[data-v-cfd38c0b] {
			margin-left: 15px;
			line-height: 23.5px;
		}
	}
}

// 徽章

.item {
	cursor: pointer;
}

.el-main {
	width: 73vw;
	--el-main-padding: 0;
	background-color: #f3f4fa;
}

// 无子菜单的
.el-menu-item:hover {
	background: #006eff;
}

// 有子菜单的
:deep(.el-sub-menu__title:hover) {
	background: #006eff;
}

:deep(.el-sub-menu__title) {
	color: #fff;
}

:deep(.el-menu--inline) {
	background: #2b303b;
}
:deep(.data-v-app) {
	padding: 0;
}
</style>
