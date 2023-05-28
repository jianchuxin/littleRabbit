import axios from "axios";
import "element-plus/theme-chalk/el-message.css";
import { ElMessage } from "element-plus";
import { useuserStore } from "@/stores/user";
import router from "@/router/index";

// 创建axios实例
const httpInstance = axios.create({
  baseURL: "http://pcapi-xiaotuxian-front-devtest.itheima.net",
  timeout: 5000,
});

// axios请求拦截器
httpInstance.interceptors.request.use(
  (config) => {
    const userStore = useuserStore();
    const token = userStore.userInfo.token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (e) => Promise.reject(e)
);

// axios响应式拦截器
httpInstance.interceptors.response.use(
  (res) => res.data,
  (e) => {
    const userStore = useuserStore();
    ElMessage({
      type: "warning",
      message: e.response.data.message,
    });

    if (e.response.status === 401) {
      userStore.clearUserInfo();
      router.push("/login");
    }
    return Promise.reject(e);
  }
);

export default httpInstance;
