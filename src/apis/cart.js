// 封装购物车相关接口
import httpInstance from "@/utils/http";

// 加入购物车
const addCartAPI = ({ skuId, count }) => {
  return httpInstance({
    url: "/member/cart",
    method: "POST",
    data: {
      skuId,
      count,
    },
  });
};

// 删除购物车
const deleteCartAPI = (ids) => {
  return httpInstance({
    url: "/member/cart",
    method: "DELETE",
    data: {
      ids,
    },
  });
};

// 获取购物车最新列表
const getCartListAPI = () => {
  return httpInstance({
    url: "/member/cart",
  });
};

// 合并本地与远程购物车
const mergeCartAPI = (goods) => {
  return httpInstance({
    url: "/member/cart/merge",
    method: "POST",
    data: goods,
  });
};

export { addCartAPI, getCartListAPI, deleteCartAPI, mergeCartAPI };
