import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "@/router/index";
import "@/styles/common.scss";
import { useIntersectionObserver } from "@vueuse/core";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");

// 定义全局指令
app.directive("img-lazy", {
  mounted(el, binding) {
    console.log(el, binding.value);
    useIntersectionObserver(el, ([{ isIntersecting }]) => {
      if (isIntersecting && !el.src) {
        // 图片进入视口区域
        el.src = binding.value;
      }
    });
  },
});
