<template>
  <div class="title">
    <div>
      <span class="iconfont icon_heart">&#xe600;</span>
      猜你喜欢
    </div>
    <ul>
      <router-link
        tag="li"
        to="/detail+ item.id"
        class="list_item"
        v-for="item in recommendList"
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
  data: function () {
    return {
      recommendList: [
        {
          id: "001",
          imgUrl:
            "https://imgs.qunarzz.com/p/p48/201302/28/bc44faa497db0dcf93835fbb.jpg_256x160_0ba13461.jpg",
          tag: "可定今日",
          title: "橘子洲",
          commentNum: "2754",
          price: "128",
          district: "朝阳区",
        },
        {
          id: "002",
          imgUrl:
            "https://imgs.qunarzz.com/p/p67/1512/a2/0ebfcd965b9391f7.jpg_256x160_04d5813d.jpg",
          tag: "可定今日",
          title: "北海公园",
          commentNum: "8797",
          price: "128",
          district: "通州区",
        },
        {
          id: "003",
          imgUrl:
            "https://img1.qunarzz.com/sight/p0/1505/3c/3c760c67b7cd23a6.water.jpg_256x160_276d573d.jpg",
          tag: "可定今日",
          title: "苏州乐园",
          commentNum: "798",
          price: "33",
          district: "长安区",
        },
        {
          id: "004",
          imgUrl:
            "https://imgs.qunarzz.com/p/p70/1809/e7/4941057a6aae702.jpg_256x160_9fee6ccb.jpg",
          tag: "可定今日",
          title: "国际中心",
          commentNum: "1233",
          price: "67",
          district: "国际度假中心",
        },
        {
          id: "005",
          imgUrl:
            "https://img1.qunarzz.com/sight/p0/201309/06/a03726324b885c8bc8d65eac.jpg_256x160_1cb9efd5.jpg",
          tag: "可定今日",
          title: "望京",
          commentNum: "23432",
          price: "345",
          district: "望京公园",
        },
      ],
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