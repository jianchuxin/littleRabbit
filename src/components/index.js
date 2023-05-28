// 把components里的组件全局化注册
import ImageView from "./imageView/index.vue";
import XtxSku from "./XtxSku/index.vue";
export const componentPlugin = {
  install(app) {
    app.component("ImageView", ImageView);
    app.component("XtxSku", XtxSku);
  },
};
