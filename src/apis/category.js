import httpInstance from "@/utils/http";

const getCategoryBreadAPI = (id) => {
  return httpInstance({
    url: "/category",
    params: {
      id,
    },
  });
};

const getCategoryFilterAPI = (id) => {
  return httpInstance({
    url: "/category/sub/filter",
    params: {
      id,
    },
  });
};

const getSubCategoryAPI = (data) => {
  return httpInstance({
    url: "/category/goods/temporary",
    method: "POST",
    data,
  });
};

export { getCategoryBreadAPI, getCategoryFilterAPI, getSubCategoryAPI };
