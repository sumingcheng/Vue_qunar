<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
    <home-recommend></home-recommend>
    <home-weekend></home-weekend>
  </div>
</template>

<script>
  import HomeHeader from "./components/Header.vue";
  import HomeSwiper from "./components/Swiper.vue";
  import HomeIcons from "./components/Icons";
  import HomeRecommend from "./components/Recommend";
  import HomeWeekend from "./components/Weekend";
  import axios from 'axios';

  export default {
    name: "Home",
    components: {
      "home-header": HomeHeader,
      "home-swiper": HomeSwiper,
      "home-icons": HomeIcons,
      "home-recommend": HomeRecommend,
      "home-weekend": HomeWeekend,
    },
    methods: {
      getHomeInfo: function () {
        // Make a request for a user with a given ID
        axios.get('/api/index.json')
          .then(this.getHomeInfoSuccess)
      },
      getHomeInfoSuccess: function (res) {
        console.log(res);
      }
    },
    mounted: function () {
      this.getHomeInfo();
    }
  };
</script>

<style lang="stylus" scoped>

</style>