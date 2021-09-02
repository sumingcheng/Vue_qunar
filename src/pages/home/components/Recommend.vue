<template>
  <div class="recommend_title">
    <div class="title">
      <span class="iconfont icon_heart">&#xe600;</span>
      猜你喜欢
    </div>
    <ul>
      <router-link
        tag="li"
        to="/detail+ item.id"
        class="list_item"
        v-for="item in this.recommendList"
        :key="item.id"
      >
        <div class="item_img">
          <img :src="item.imgUrl">
        </div>
        <div class="item_img_tag"></div>
        <div class="item_info">
          <div class="inner_box">
            <div class="info_title">{{item.title}}</div>
            <div class="info_comment">
              <span class="iconfont icon_star">&#xe601;&#xe601;&#xe601;&#xe601;&#xe601;</span>
              <span class="comment_num">{{item.commentNum}}</span>
            </div>
            <div class="info_price">
              <span class="price">￥<em>{{item.price}}</em></span>起
              <span class="district">{{item.district}}</span>
            </div>
          </div>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HomeCommend",
  props:{
    recommendList: Array
  },
  data: function () {
    return {

    };
  },
};
</script>

<style lang="stylus" scoped>
@import '~styles/variables.styl';
@import '~styles/mixins.styl';

div {
  box-sizing: border-box;
}


.title {
  width: 100%;
  height: 0.8rem;
  line-height: 0.8rem;
  font-size: 0.32rem;
  background-color: #eee;
  padding: 0 0.2rem;
  
}

.recommend_title .icon_heart {
  color: #FF4040;
  
}

.list_item {
  position: relative;
  display: flex;
  width: 100%;
  height: 2.4rem;
}

.list_item .item_img {
  width: 2.4rem;
  height: 2.4rem;
  // background-color: green;
  padding: 0.2rem;
}

.list_item .item_img img {
  width: 100%;
  height: 100%;
}

.list_item .item_img_tag {
  position: absolute;
  top: 0.2rem;
  left: 0.2rem;
  width: 1.02rem;
  height: 0.38rem;
  line-height: 0.38rem;
  background-image: url();
  background-size: 100% 100%;
  font-size: 0.2rem;
  color: #fff;
  text-indent: 0.04rem;
}

.list_item .item_info {
  flex: 1;
  padding: 0.4rem 0.1rem;
  min-width: 0;
}

.list_item .item_info .inner_box {
  width: 100%;
  height: 100%;
}

.item_info .inner_box .info_title {
  width: 100%;
  height: 0.6rem;
  line-height: 0.6rem;
  font-size: 0.32rem;
  ellipsis();
}

.item_info .inner_box .info_comment {
	width: 100%;
	height: .4rem;
	line-height: .4rem;
	font-size: .24rem;
}

.item_info .inner_box .info_comment .icon_star {
  font-size: 0.2rem;
  color: #ffb436;
}

.item_info .inner_box .info_comment .comment_num {
  color: $ligthTxtColor;
}

.item_info .inner_box .info_price {
	position: relative;
  width: 100%;
  height: 0.6rem;
  line-height: 0.6rem;
  color: $ligthTxtColor;
}

.item_info .inner_box .info_price span {
  font-szie: 0.24rem;
}

.item_info .inner_box .info_price .district {
  position: absolute;
  bottom: 0;
  right: 0.24rem;
}

.item_info .inner_box .info_price .price {
  color: #ff8300;
}

.item_info .inner_box .info_price .price em {
  font-size: 0.4rem;
}
</style>