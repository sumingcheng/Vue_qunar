<template>
  <div class="recommend_title">
    <div>
      <span class="iconfont icon_heart">&#xe600;</span>
      猜你喜欢
    </div>
    <ul>
      <li class="list_item">
        <div class="item_img">
          <img src="https://imgs.qunarzz.com/p/p48/201302/28/bc44faa497db0dcf93835fbb.jpg_256x160_0ba13461.jpg">
        </div>
        <div class="item_img_tag">

        </div>
        <div class="item_info">
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'Homecommend'
  }
</script>

<style scoped lang="stylus">
  div {
    box-sizing: border-box;
  }

  .recommend_title {
    width: 100%;
    height: 0.8rem;
    background-color: #eee;
    line-height: 0.8rem;
    font-size: 0.32rem;
    padding: 0 0.2rem;
  }

  .recommend_title .icon_heart {
    color: #FF4040
  }

  .list_item {
    display: flex;
    width: 100%;
    height: 2.4rem;
    background-color: orange;
  }

  .list_item .item_img {
    width: 2.4rem;
    height: 2.4rem;
    background-color: green;
    padding: 0.2rem;

  }

  .list_item .item_img img {
    width: 100%;
    height: 100%;

  }

  .list_item  .item_img_tag {
    width: 1.02rem;
    height: 0.38rem;
    background-color: pink;
    background-image:url();
  }

  .list_item .item_info {
    flex: 1;
    background-color: blue;

  }
</style>