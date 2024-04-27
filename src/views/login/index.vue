<!--
 * @Author: 'yang' '1173278084@qq.com'
 * @Date: 2024-03-11 13:06:42
 * @LastEditors: 'yang' '1173278084@qq.com'
 * @LastEditTime: 2024-04-25 12:36:44
 * @FilePath: \Web-General-background-management-system-background\src\views\login\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
	<div class="common-layout">
		<el-container>
			<el-header class="header-wrapped">
				<div class="header-content">
					<h3>
						<img
							src="@/../public/tubiao.jpg"
							alt=""
							class="img_img"
						/>
						<p>温馨客栈管理系统</p>
					</h3>
					<span class="welcome">欢迎您的登录！</span>
				</div>
			</el-header>
			<div class="ceshi">
				测试账号密码 ：<br />
				超级管理员：123456 w123456 <br />产品管理员：111111 w111111<br />
				用户管理员：222222 w222222 <br />消息管理员：333333 w333333
				<br />用户：666666 w666666
			</div>
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
											show-password
											placeholder=" 请输入密码"
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
												<el-button
													type="primary"
													@click="Login"
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
									><el-form-item label="注册">
										<el-input
											v-model="registerData.account"
											placeholder=" 请输入账号长度6-12位"
										/>
									</el-form-item>
									<el-form-item label="密码">
										<el-input
											v-model="registerData.password"
											show-password
											placeholder=" 请输入密码长度6-12位含字母和数字"
										/>
									</el-form-item>
									<el-form-item label="确认密码">
										<el-input
											v-model="registerData.repassword"
											show-password
											placeholder=" 请再次确认密码"
										/>
									</el-form-item>
									<el-button
										type="primary"
										@click="Register"
										:plain="true"
										>注册</el-button
									>
								</el-form>
							</el-tab-pane>
						</el-tabs>
					</el-card>
				</div>
			</el-main>
			<el-footer class="footer-wrapped">
				<div class="footer-content">此处填写备案信息，略。。。。</div>
			</el-footer>
		</el-container>
	</div>
	<forget ref="forgetP"></forget>
</template>

<script lang="ts" setup>
import { ref, reactive } from "vue";
import forget from "./components/forget_password.vue";
const activeName = ref("first");
import { login, register, returnMenuList } from "@/api/login";
import { log } from "console";
import { ElMessage } from "element-plus";
import { useRouter } from "vue-router";
import { useUserInfor } from "@/stores/userinfor";
import { loginLog } from "@/api/log";
import { getUserInfor } from "@/api/userinfor";
import { useMenu } from "@/stores/menu";
const store = useUserInfor();
const menuStore = useMenu();
interface formData {
	account: null | number;
	password: string;
	repassword?: string;
}
interface user {
	account: null | number;
	name: string;
	email: string;
}
const user = reactive({});
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
const getUser = async (id: number) => {
	const res = await getUserInfor(id);
	loginLog(res.account, res.name, res.email);
};
//login
const router = useRouter();
const Login = async () => {
	const res = await login(loginData);
	const { token } = res;
	if (res.message === "登录成功") {
		const { id } = res.results;
		const routerList = (await returnMenuList(id)) as any;
		menuStore.setRouter(routerList);
		ElMessage({
			message: "登录成功！",
			type: "success",
		});
		localStorage.setItem("token", token);
		sessionStorage.setItem("id", id);
		store.userInfo(id);
		getUser(id);
		router.push("home");
	} else {
		ElMessage.error("登录失败，注意检查账号密码");
	}
};
//注册
const Register = async () => {
	if (registerData.password == registerData.repassword) {
		const res = await register(registerData);
		if (res.message === "注册账号成功") {
			ElMessage({
				message: "注册成功！",
				type: "success",
			});
			activeName.value = "first";
		} else {
			ElMessage.error("注册失败！");
		}
	} else {
		ElMessage.error("两次密码不一致");
	}
};
// 忘记密码弹窗
const forgetP = ref();
// 打开忘记密码弹窗
const openForget = () => {
	forgetP.value.open();
};
</script>

<style lang="scss" scoped>
.common-layout {
	width: 100vw;
	height: 100vh;
	background: url("@/assets/code.png") no-repeat center;
	align-items: flex-start;
	overflow: hidden;
}
.header-wrapped {
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: space-around;
	background-color: black;
	opacity: 0.6;
	.header-content {
		color: white;
		height: 8.5vh;
		width: 100vw;
		margin: 0 auto;
		display: flex;
		justify-content: space-around;
		align-items: center;
		font-size: 20px;
		font-weight: 500;
		span .welcome {
			font-size: 24px;
			font-weight: 300;
		}
		h3 {
			display: flex;
			line-height: 8.5vh;
			height: 8.5vh;
			vertical-align: baseline;
			.img_img {
				width: 8.5vh;
				height: 8.5vh;
			}
		}
	}
}
.el-main {
	--el-main-padding: 0px;
	width: 100%;
	height: 100%;
	.login_wrapped {
		width: 1200px;
		height: 83vh;
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
	width: 100%;
	height: 100%;
	.footer-content {
		margin-top: 2vh;
		text-align: center;
	}
}
.ceshi {
	background-color: black;
	opacity: 0.6;
	font-weight: 500;
	font-size: 32px;
	position: absolute;
	bottom: 0;
	left: 40%;
	color: #fff;
}
</style>
