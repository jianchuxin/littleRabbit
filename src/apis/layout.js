import httpInstance from "@/utils/http";
function getCategoryAPI() {
  return httpInstance({
    url: "/home/category/head",
  });
}

export { getCategoryAPI };
