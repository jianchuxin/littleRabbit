// 购物车模块
import { ref } from "vue";
import { defineStore } from "pinia";

export const useCartStore = defineStore(
  "cart",
  () => {
    const cartList = ref([]);

    const addCart = (good) => {
      const item = cartList.value.find((item) => {
        return item.skuId === good.skuId;
      });
      if (item) {
        item.count += good.count;
      } else {
        cartList.value.push(good);
      }
    };

    return { cartList, addCart };
  },
  {
    persist: true,
  }
);
