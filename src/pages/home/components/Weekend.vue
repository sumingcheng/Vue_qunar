<template>
  <div class="recommend_title">
    <div>
      周末去哪儿
    </div>
    <ul>
      <router-link
        tag="li"
        to="/detail"
        class="list_item"
        v-for="item in weekendList"
        :key="item.id"
      >
        <div class="item_img">
          <img :src="item.imgUrl">
        </div>
        <div class="item_info">
          <div class="info_title">{{item.title}}</div>
          <div class="info_comment">{{item.comment}}</div>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeWeekend",
  props:{
    weekendList:Array
  },
  data: function () {
    return {
      
    };
  },
};
</script>

<style scoped lang="stylus">
@import '~styles/variables.styl';
@import '~styles/mixins.styl';

div {
  box-sizing: border-box;
}

.recommend_title {
  width: 100%;
  height: 0.8rem;
  line-height: 0.8rem;
  font-size: 0.28rem;
  background-color: #eee;
  padding: 0 0.2rem;
}

.list_item .item_img {
  width: 100%;
  height: 0;
  padding-bottom: 2.8rem;
}

.list_item .item_img img {
  width: 100%;
}

.list_item .item_info {
  padding: 0.14rem 0.2rem 0.2rem;
}

.item_info .inner-box .info_title {
  width: 100%;
  height: 0.48rem;
  line-height: 0.48rem;
  font-size: 0.28rem;
  ellipsis();
}

.item_info .info_comment {
  width: 100%;
  height: 0.42rem;
  line-height: 0.28rem;
  font-size: 0.24rem;
  color: $lightTxtColor;
}
</style>