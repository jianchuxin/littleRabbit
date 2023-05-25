<script setup>
import HomeCategory from "./components/HomeCategory.vue";
import HomeBanner from "./components/HomeBanner.vue";
import HomeHot from "./components/HomeHot.vue";
import HomeNew from "./components/HomeNew.vue";
import HomeProduct from "./components/HomeProduct.vue";
import HomePanel from "./components/HomePanel.vue";
</script>

<template>
  <div class="container">
    <HomeCategory />
    <HomeBanner />
  </div>
  <HomeNew />
  <HomeHot />
  <HomeProduct />
  <HomePanel title="新鲜好物" sub-title="新鲜好物 good">
    <div>我是slot！！！</div>
  </HomePanel>

  <HomePanel title="人气推荐" sub-title="人气推荐 nice">
    <div>我是slot！！！</div>
  </HomePanel>
</template>
