// 购物车模块
import { ref, computed } from "vue";
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

    const deleteCart = (id) => {
      //   cartList.value = cartList.value.filter((item) => {
      //     item.skuId !== id;
      //   });
      const index = cartList.value.findIndex((item) => item.skuId === id);
      cartList.value.splice(index, 1);
    };

    const singleCheck = (skuId, selected) => {
      const item = cartList.value.find((item) => {
        return item.skuId === skuId;
      });
      item.selected = selected;
    };

    const isAll = computed(() => {
      return cartList.value.every((item) => item.selected);
    });

    const allCheck = (selected) => {
      cartList.value.forEach((item) => (item.selected = selected));
    };

    return { cartList, addCart, deleteCart, singleCheck, isAll, allCheck };
  },
  {
    persist: true,
  }
);
