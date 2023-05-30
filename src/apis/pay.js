import httpInstance from "@/utils/http";

const getOrderAPI = (id) => {
  return httpInstance({
    url: "/member/order/" + id,
  });
};

export { getOrderAPI };
