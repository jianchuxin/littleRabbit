import httpInstance from "@/utils/http";

const getDetail = (id) => {
  return httpInstance({
    url: "/goods",
    params: {
      id,
    },
  });
};

const getHotGoodsAPI = ({ id, type, limit = 3 }) => {
  return httpInstance({
    url: "/goods/hot",
    params: {
      id,
      type,
      limit,
    },
  });
};
export { getDetail, getHotGoodsAPI };
