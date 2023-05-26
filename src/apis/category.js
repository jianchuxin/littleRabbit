import httpInstance from "@/utils/http";

const getCategoryBreadAPI = (id) => {
  return httpInstance({
    url: "/category",
    params: {
      id,
    },
  });
};

export { getCategoryBreadAPI };
