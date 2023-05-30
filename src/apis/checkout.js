import httpInstance from "@/utils/http";

const getCheckInfoAPI = () => {
  return httpInstance({
    url: "/member/order/pre",
  });
};

const createOrderAPI = (data) => {
  return httpInstance({
    url: "/member/order",
    method: "POST",
    data,
  });
};

export { getCheckInfoAPI, createOrderAPI };
