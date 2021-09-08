<template>
  <div class="list">
    <div>
      <div class="hot-cities">
        <div class="hot-cts-title">热门城市 </div>
        <ul class="crlearfix">
          <li class="border-top">北京</li>
          <li class="border-topleft">北京</li>
          <li class="border-topleft">北京</li>
          <li class="border-top">北京</li>
          <li class="border-topleft">北京</li>
          <li class="border-topleft">北京</li>
          <li class="border-top">北京</li>
          <li class="border-topleft">北京</li>
          <li class="border-topleft">北京</li>
          <li class="border-top">北京</li>
          <li class="border-topleft">北京</li>
          <li class="border-topleft">北京</li>
        </ul>
      </div>
      <div class="alphabet-menu">
        <div class="alphabet-menu-title">字母排序</div>
        <ul class="clearfix">
          <li>A</li>
          <li>A</li>
          <li>A</li>
          <li>A</li>
          <li>A</li>
          <li>A</li>
          <li>A</li>
          <li>A</li>
          <li>A</li>
          <li>A</li>
          <li>A</li>
          <li>A</li>
          <li>A</li>
          <li>A</li>
          <li>A</li>
          <li>A</li>
          <li>A</li>
          <li>A</li>
          <li>A</li>
          <li>A</li>
          <li>A</li>
          <li>A</li>
          <li>A</li>
          <li>A</li>
          <li>A</li>
          <li>A</li>
        </ul>
      </div>
      <div class="aplhabet-list">
        <div class="alphabet-list-title">A</div>
        <ul class="clearfix">
          <li>阿联酋</li>
          <li>阿联酋</li>
          <li>阿联酋</li>
          <li>阿联酋</li>
          <li>阿联酋</li>
          <li>阿联酋</li>
          <li>阿联酋</li>
          <li>阿联酋</li>
          <li>阿联酋</li>
          <li>阿联酋</li>
          <li>阿联酋</li>
          <li>阿联酋</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CityList",
};
</script>

<style  lang="stylus" scoped>
@import '~styles/variables.styl';

div {
  box-sizing: border-box;
}

.crlearfix::after {
  content: '';
  display: block;
  clear: both;
}

.list {
  position: absolute;
  top: 0.88rem;
  left: 0;
  right: 0;
  bottom: 0;
}

.hot-cities {
  width: 100%;
  height: 4.32rem;
}

.hot-cities .hot-cts-title, .alphabet-menu .alphabet-menu-title, .aplhabet-list .alphabet-list-title {
  padding: 0 0.2rem;
  width: 100%;
  height: 0.72rem;
  line-height: 0.72rem;
  background-color: #F5F5F5;
}

.hot-cities .hot-cts-title {
  width: 100%;
  height: 0.72rem;
  line-height: 0.72rem;
  padding: 0 0.2rem;
  font-size: 0.26rem;
  color: $darkTxtColor;
  background-color: pink;
  padding: 0 0.2rem;
}

.hot-cities ul li {
  float: left;
  width: 33.33%;
  height: 0.9rem;
  background-color: lightblue;
  line-height: 0.9rem;
  text-align: center;
}

.alphabet-menu ul {
  height: 4.2rem;
  margin: 0.3rem 0;
}

.alphabet-menu ul li {
  float: left;
  width: 16.66%;
  height: 0.9rem;
  line-height: 0.9rem;
  text-align: center;
}

.aplhabet-list ul li {
  float: left;
  width: 25%;
  height: 0.9rem;
  line-height: 0.9rem;
  text-align: center;
}
</style>