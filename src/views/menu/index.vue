<template>
	<div class="common-layout">
		<el-container class="abc">
			<el-aside width="250px">
				<el-menu class="el-menu-vertical-demo" router>
					<div class="title">通用后台管理系统</div>
					<!-- 菜单栏 -->
					<el-menu-item index="home">
						<el-icon><House /></el-icon>
						<span>首页 </span>
					</el-menu-item>
					<el-menu-item index="2">
						<el-icon><icon-menu /></el-icon>
						<span>系统概览 </span>
					</el-menu-item>
					<!-- 分层菜单用户管理  -->
					<el-sub-menu index="3">
						<template #title>
							<el-icon><User /></el-icon>
							<span>用户管理</span>
						</template>
						<el-menu-item-group title="管理员管理">
							<el-menu-item index="3-1">产品管理员</el-menu-item>
							<el-menu-item index="3-2">用户管理员</el-menu-item>
							<el-menu-item index="3-3">消息管理员</el-menu-item>
						</el-menu-item-group>
						<el-menu-item-group title="用户管理">
							<el-menu-item index="3-4">用户列表</el-menu-item>
						</el-menu-item-group>
					</el-sub-menu>
					<!-- 产品管理 -->
					<el-sub-menu index="4">
						<template #title>
							<el-icon><HomeFilled /></el-icon>
							<span>产品管理</span>
						</template>
						<el-menu-item-group title="入库管理">
							<el-menu-item index="4-1">产品管理</el-menu-item>
						</el-menu-item-group>
						<el-menu-item-group title="出库管理">
							<el-menu-item index="4-2">出库管理</el-menu-item>
						</el-menu-item-group>
					</el-sub-menu>
					<!-- 消息管理 -->
					<el-sub-menu index="5">
						<template #title>
							<el-icon><ChatRound /></el-icon>
							<span>消息管理</span>
						</template>
						<el-menu-item-group title="消息管理">
							<el-menu-item index="5-1">消息列表</el-menu-item>
						</el-menu-item-group>
						<el-menu-item-group title="回收站">
							<el-menu-item index="5-2">回收站</el-menu-item>
						</el-menu-item-group>
					</el-sub-menu>
					<el-menu-item index="6">
						<el-icon><Memo /></el-icon>
						<span>合同管理</span>
					</el-menu-item>
					<el-menu-item index="7">
						<el-icon><icon-menu /></el-icon>
						<span>操作日志</span>
					</el-menu-item>
					<el-menu-item index="8">
						<el-icon><Upload /></el-icon>
						<span>登录日志</span>
					</el-menu-item>
					<el-menu-item index="9">
						<el-icon><Setting /></el-icon>
						<span>系统设置 </span>
					</el-menu-item>
				</el-menu>
			</el-aside>
			<el-container>
				<el-header>
					<span class="hander-left-content"
						>尊敬的 沥青 欢迎您登录本系统</span
					>
					<div class="hander-right-content">
						<el-icon><Message /></el-icon>
						<el-avatar :size="24" :src="circleUrl" />
						<el-dropdown>
							<span class="el-dropdown-link"> 设置 </span>
							<template #dropdown>
								<el-dropdown-menu>
									<el-dropdown-item
										>设置账号</el-dropdown-item
									>
									<el-dropdown-item
										>更改头像</el-dropdown-item
									>
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
import { reactive, toRefs, ref } from "vue";
import { useRouter } from "vue-router";
const { circleUrl } = toRefs();
const router = useRouter();

const state = reactive({
	circleUrl:
		"https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
});

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
		padding: 20px;
		display: flex;
		justify-content: center;
		color: #fff;
		background: #272c35;
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
		justify-content: space-around;
		align-items: center;
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
