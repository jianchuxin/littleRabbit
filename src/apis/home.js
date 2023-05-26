import httpInstance from "@/utils/http";

// 获取banner
const getBannerAPI = () => {
  return httpInstance({
    url: "/home/banner",
  });
};

// 获取新鲜好物信息
const findNewAPI = () => {
  return httpInstance({
    url: "/home/new",
  });
};

// 获取人气推荐信息
const findHotAPI = () => {
  return httpInstance({
    url: "/home/hot",
  });
};

//获取商品模块
const getGoodsAPI = () => {
  return httpInstance({
    url: "/home/goods",
  });
};

export { getBannerAPI, findNewAPI, findHotAPI, getGoodsAPI };
