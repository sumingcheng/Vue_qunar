<template>
  <div class="list">
    <div>
      <div class="hot-cities">
        <div class="hot-cts-title">热门城市 </div>
        <ul>
          <li>北京</li>
          <li>北京</li>
          <li>北京</li>
          <li>北京</li>
          <li>北京</li>
          <li>北京</li>
          <li>北京</li>
          <li>北京</li>
        </ul>
      </div>
      <div class="alphabet-menu"></div>
      <div class="aplhabet-list"></div>
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

.hot-cities {
  width: 100%;
  height: 4.32rem;
  background-color: orange;
}

.hot-cities .hot-cts-title {
  width: 100%;
  height: 0.72rem;
  line-height: 0.72rem;
  padding: 0 0.2rem;
  font-size: 0.26rem;
  color: $darkTxtColor;
  background-color: pink;
}

.hot-cities ul li {
  float: left;
  width: 33.33%;
  height: 0.9rem;
  background-color: lightblue;
  border: 1px solid #000;
}
</style>