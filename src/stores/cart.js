// 购物车模块
import { ref, computed } from "vue";
import { defineStore } from "pinia";
import { useuserStore } from "./user";
import { addCartAPI, deleteCartAPI, getCartListAPI } from "@/apis/cart";

export const useCartStore = defineStore(
  "cart",
  () => {
    const cartList = ref([]);

    const addCart = async (good) => {
      const userStore = useuserStore();
      if (userStore.isLoggedin) {
        //加入远程购物车
        await addCartAPI({ skuId: good.skuId, count: good.count });
        await updateCart();
      } else {
        const item = cartList.value.find((item) => {
          return item.skuId === good.skuId;
        });
        if (item) {
          item.count += good.count;
        } else {
          cartList.value.push(good);
        }
      }
    };

    const deleteCart = async (skuId) => {
      const userStore = useuserStore();
      if (userStore.isLoggedin) {
        await deleteCartAPI([skuId]);
        await updateCart();
      } else {
        const index = cartList.value.findIndex((item) => item.skuId === skuId);
        cartList.value.splice(index, 1);
      }
    };

    const updateCart = async () => {
      const res = await getCartListAPI();
      cartList.value = res.result;
    };

    const clearCart = () => {
      cartList.value = [];
    };

    const sumCount = computed(() => {
      return cartList.value.reduce((sum, i) => sum + i.count, 0);
    });

    const sumCost = computed(() => {
      return cartList.value.reduce((sum, i) => sum + i.count * i.price, 0);
    });

    const selectedCount = computed(() => {
      return cartList.value.reduce(
        (sum, i) => (i.selected ? sum + i.count : sum),
        0
      );
    });

    const selectedPrice = computed(() => {
      return cartList.value.reduce(
        (sum, i) => (i.selected ? sum + i.count * i.price : sum),
        0
      );
    });

    const isAll = computed(() => {
      return cartList.value.every((item) => item.selected);
    });

    const singleCheck = (skuId, selected) => {
      const item = cartList.value.find((item) => {
        return item.skuId === skuId;
      });
      item.selected = selected;
    };

    const allCheck = (selected) => {
      cartList.value.forEach((item) => (item.selected = selected));
    };

    return {
      cartList,
      addCart,
      deleteCart,
      clearCart,
      updateCart,
      sumCount,
      sumCost,
      selectedCount,
      selectedPrice,
      singleCheck,
      isAll,
      allCheck,
    };
  },
  {
    persist: true,
  }
);
