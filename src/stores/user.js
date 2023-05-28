// 管理用户数据相关
import { ref } from "vue";
import { defineStore } from "pinia";
import { loginAPI } from "@/apis/user";

export const useuserStore = defineStore(
  "user",
  () => {
    const userInfo = ref({});
    const isLoggedin = ref(false);
    const getUserInfo = async ({ account, password }) => {
      const res = await loginAPI({ account, password });
      userInfo.value = res.result;
      isLoggedin.value = true;
    };

    return {
      userInfo,
      isLoggedin,
      getUserInfo,
    };
  },
  {
    persist: true,
  }
);
