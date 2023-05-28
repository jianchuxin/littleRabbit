// 管理用户数据相关
import { ref } from "vue";
import { defineStore } from "pinia";
import { loginAPI } from "@/apis/user";

export const useuserStore = defineStore(
  "user",
  () => {
    // state
    const userInfo = ref({});
    const isLoggedin = ref(false);

    //action
    const getUserInfo = async ({ account, password }) => {
      const res = await loginAPI({ account, password });
      userInfo.value = res.result;
      isLoggedin.value = true;
    };

    const clearUserInfo = () => {
      userInfo.value = {};
      isLoggedin.value = false;
    };

    return {
      userInfo,
      isLoggedin,
      getUserInfo,
      clearUserInfo,
    };
  },
  {
    persist: true,
  }
);
