import httpInstance from "@/utils/http";

// 获取banner
function getBannerAPI() {
  return httpInstance({
    url: "/home/banner",
  });
}

export { getBannerAPI };
