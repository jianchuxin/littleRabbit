import httpInstance from "@/utils/http";

const getCheckInfoAPI = () => {
  return httpInstance({
    url: "/member/order/pre",
  });
};

export { getCheckInfoAPI };
