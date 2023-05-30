// 管理用户数据相关
import { computed, ref } from "vue";
import { defineStore } from "pinia";
import { loginAPI } from "@/apis/user";
import { useCartStore } from "./cart";
import { mergeCartAPI } from "@/apis/cart";
export const useuserStore = defineStore(
  "user",
  () => {
    const cartStore = useCartStore();
    // state
    const userInfo = ref({});
    // const isLoggedin = ref(false);
    const isLoggedin = computed(() => {
      return !!userInfo.value.token;
    });

    //action
    const getUserInfo = async ({ account, password }) => {
      const res = await loginAPI({ account, password });
      userInfo.value = res.result;
      await mergeCartAPI(
        cartStore.cartList.map((item) => {
          return {
            skuId: item.skuId,
            selected: item.selected,
            count: item.count,
          };
        })
      );
      await cartStore.updateCart();
    };

    const clearUserInfo = () => {
      userInfo.value = {};
      cartStore.clearCart();
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
