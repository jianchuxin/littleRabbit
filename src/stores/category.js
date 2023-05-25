import { ref } from "vue";
import { defineStore } from "pinia";
import { getCategoryAPI } from "@/apis/httpTest";

export const useCategoryStore = defineStore("category", () => {
  //导航列表的数据
  const categoryList = ref([]);
  // action获取导航数据
  const getCategory = async () => {
    const res = await getCategoryAPI();
    // console.log(res);
    categoryList.value = res.result;
  };

  return { categoryList, getCategory };
});
