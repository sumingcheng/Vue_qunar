<!-- The ref attr used to find the swiper instance -->
<template>
  <div class="sw-wrapper">
    <swiper :options="swiperOption" ref="mySwiper">
      <!-- slides -->
      <swiper-slide v-for="item in swiperList" :key="item.id">
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
    data: function () {
      return {
        swiperOption: {
          pagination: ".swiper-pagination",
          loop: true,

        },
        swiperList: [{
            id: '001',
            imgUrl: "https://img.alicdn.com/imgextra/i2/6000000003803/O1CN01xKFmHa1dxowOVl032_!!6000000003803-0-lubanimage.jpg",
          },
          {
            id: '002',
            imgUrl: "https://img.alicdn.com/imgextra/i3/6000000001843/O1CN01j556yG1PU8eP2LhY2_!!6000000001843-0-lubanimage.jpg",
          },
        ],
      };
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

  .sw-wrapper .swiper-pagination {
    z-index: 10;
  }
</style>