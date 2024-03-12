<!--
 * @Author: 'yang' '1173278084@qq.com'
 * @Date: 2024-03-11 13:06:42
 * @LastEditors: 'yang' '1173278084@qq.com'
 * @LastEditTime: 2024-03-12 16:50:46
 * @FilePath: \Web-General-background-management-system-background\src\views\login\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
	<div class="common-layout">
		<el-container>
			<el-header class="header-wrapped">
				<div class="header-content">
					<h3>通用后台管理系统</h3>
					<span class="welcome">欢迎您的登录！</span>
				</div>
			</el-header>
			<el-main>
				<div class="login_wrapped">
					<el-card class="box-card">
						<el-tabs
							v-model="activeName"
							type="boder-card"
							class="demo-tabs"
							@tab-click="handleClick"
							stretch="true"
						>
							<el-tab-pane label="登录" name="first">
								<!-- 表单 -->
								<el-form
									:model="form"
									label-width="auto"
									style="max-width: 600px"
									class="login-form"
								>
									<el-form-item label="登录">
										<el-input
											v-model="loginData.account"
											placeholder=" 请输入账号"
										/>
									</el-form-item>
									<el-form-item label="密码">
										<el-input
											v-model="loginData.password"
											placeholder=" 请输入账号"
										/>
									</el-form-item>
									<!-- 底部外壳 -->
									<div class="footer-wrapped">
										<div class="forget-password">
											<span
												class="forget-password-button"
												@click="openForget"
												>忘记密码</span
											>
										</div>
										<div class="forget-login">
											<span class="footer-button">
												<el-button type="primary"
													>登录</el-button
												>
											</span>
										</div>
										<div class="footer-register">
											还没有账号?<span>马上注册</span>
										</div>
									</div>
								</el-form>
							</el-tab-pane>
							<el-tab-pane label="注册" name="secend">
								<!-- 注册表单 -->
								<el-form
									:model="form"
									label-width="auto"
									style="max-width: 600px"
									class="login-form"
									><el-form-item label="登录">
										<el-input
											v-model="registerData.account"
											placeholder=" 请输入账号长度6-12位"
										/>
									</el-form-item>
									<el-form-item label="密码">
										<el-input
											v-model="registerData.password"
											placeholder=" 请输入密码长度6-12位含字母和数字"
										/>
									</el-form-item>
									<el-form-item label="确认密码">
										<el-input
											v-model="registerData.repassword"
											placeholder=" 请再次确认密码"
										/>
									</el-form-item>
									<el-button type="primary">登录</el-button>
								</el-form>
							</el-tab-pane>
						</el-tabs>
					</el-card>
				</div>
			</el-main>
			<el-footer class="footer-wrapped">
				<div class="footer-content">
					作品在github搜索yybb99999用户仓库中，希望可以点点star
				</div>
			</el-footer>
		</el-container>
	</div>
	<forget ref="forgetP"></forget>
</template>

<script lang="ts" setup>
import { ref, reactive } from "vue";
import forget from "./components/forget_password.vue";
const activeName = ref("first");

interface formData {
	account: null | number;
	password: string;
	repassword?: string;
}
//登录账号数据
const loginData: formData = reactive({
	account: null,
	password: "",
});
//注册账号
const registerData: formData = reactive({
	account: null,
	password: "",
	repassword: "",
});

// 忘记密码弹窗
const forgetP = ref();
// 打开忘记密码弹窗
const openForget = () => {
	forgetP.value.open();
};
</script>

<style lang="scss" scoped>
.common-layout {
	width: 1280px;
	background: url("@/assets/code.png") no-repeat center;
	align-items: flex-start;
	overflow: hidden;
}
.header-wrapped {
	display: flex;
	justify-content: space-around;
	background-color: black;
	opacity: 0.6;
	.header-content {
		color: white;
		width: 1200px;
		margin: 0 auto;
		display: flex;
		justify-content: space-around;
		align-items: center;
		font-size: 20px;
		font-weight: 500;
		.welcome {
			font-style: 13px;
			font-weight: 300;
		}
	}
}
.el-main {
	--el-main-padding: 0px;
	height: 600px;
	.login_wrapped {
		width: 1200px;
		height: 600px;
		margin: 0 auto;
		.box-card {
			.el-button {
				display: flex;
				width: 305px;
				height: 45px;
				font-size: 16px;
			}
			width: 350px;
			height: 350px;
			float: right;
			position: relative;
			top: 15%;
			right: 50%;
			transform: translate(175px);
			.el-form-item {
				margin-top: 20px;
			}
			:deep(.el-tabs__item) {
				font-size: 18px;
				font-weight: 500;
			}
			.footer-wrapped {
				display: flex;
				flex-direction: column;
				align-items: flex-end;
				.forget-password {
					.forget-password-button {
						font-size: 12px;
						color: #739bc0;
						cursor: pointer;
					}
				}
				.footer-register {
					font-size: 12px;
					margin: 12px 0;
					display: flex;
					justify-content: center;
					width: 305px;
					span {
						color: #739bc0;
						cursor: pointer;
					}
				}
			}
		}
	}
}
.footer-wrapped {
	.footer-content {
		margin-top: 8px;
		text-align: center;
	}
}
</style>
