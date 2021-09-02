<template>
  <div>
<<<<<<< HEAD
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
    <home-recommend></home-recommend>
    <home-weekend></home-weekend>
=======
    <!-- 动态传值给子组件 -->
    <home-header :city="city"></home-header>
    <home-swiper :swiper-list="swiperList"></home-swiper>
    <home-icons :icons-list="iconsList"></home-icons>
    <home-recommend :recommend-list="recommendList"></home-recommend>
    <home-weekend :weekend-list ="weekendList"></home-weekend>
>>>>>>> origin/ajax
  </div>
</template>

<script>
<<<<<<< HEAD
  import HomeHeader from "./components/Header.vue";
  import HomeSwiper from "./components/Swiper.vue";
  import HomeIcons from "./components/Icons";
  import HomeRecommend from "./components/Recommend";
  import HomeWeekend from "./components/Weekend";


  export default {
    name: "Home",
    components: {
      "home-header": HomeHeader,
      "home-swiper": HomeSwiper,
      "home-icons": HomeIcons,
      "home-recommend": HomeRecommend,
      "home-weekend": HomeWeekend,
    },
  };
=======
import HomeHeader from "./components/Header.vue";
import HomeSwiper from "./components/Swiper.vue";
import HomeIcons from "./components/Icons";
import HomeRecommend from "./components/Recommend";
import HomeWeekend from "./components/Weekend";
import axios from "axios";

export default {
  name: "Home",
  components: {
    "home-header": HomeHeader,
    "home-swiper": HomeSwiper,
    "home-icons": HomeIcons,
    "home-recommend": HomeRecommend,
    "home-weekend": HomeWeekend,
  },
  data: function () {
    return {
      city: "",
      swiperList: [],
      iconsList: [],
      recommendList: [],
      weekendList: [],
    };
  },
  methods: {
    getHomeInfo: function () {
      // Make a request for a user with a given ID
      axios.get("/api/index.json").then(this.getHomeInfoSuccess);
    },
    getHomeInfoSuccess: function (res) {
      if (res.data.ret && res.data.data) {
        var data = res.data.data;
        this.city = data.city;
        this.swiperList = data.swiperList;
        this.iconsList = data.iconsList;
        this.recommendList = data.recommendList;
        this.weekendList = data.weekendList;
        
      }
      console.log(res);
    },
  },
  mounted: function () {
    this.getHomeInfo();
  },
};
>>>>>>> origin/ajax
</script>

<style lang="stylus" scoped></style>