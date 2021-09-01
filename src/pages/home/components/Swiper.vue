<!-- The ref attr used to find the swiper instance -->
<template>
  <div class="sw-wrapper">
    <swiper :options="swiperOption" v-if="isSwiperShow">
      <!-- slides -->
      <swiper-slide v-for="item in this.swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  export default {
    name: "HomeSwiper",
    props: {
      swiperList: Array
    },
    data: function () {
      return {
        swiperOption: {
          pagination: ".swiper-pagination",
          loop: true,
          autoplay: 3000,
          speed: 300,
        },
      };
    },
    computed: {
      isSwiperShow:function(){
        return this.swiperList.length;
      }
    },
  };
</script>

<style lang="stylus" scope>
  .sw-wrapper>>>.swipper-pagination-bullet-active {
    background-color: #fff !important;
  }

  .sw-wrapper {
    overflow: hidden;
    width: 100%;
    height: 0;
    padding-bottom: 26.67%;
    background-color: #eee;
  }

  .sw-wrapper .swiper-img {
    width: 100%;
    height: 100%;
  }
</style>