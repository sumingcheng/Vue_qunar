<template>
  <div class="header">
    <router-link to="/">
      <span class="iconfont city-back">&#xe633;</span>
    </router-link>
    城市选择
  </div>
</template>

<script>
export default {
  name: "CityHeader",
};
</script>

<style lang='stylus' scope>
@import '~styles/variables.styl';

.header {
  width: 100%;
  height: 0.88rem;
  line-height: 0.88rem;
  text-align: center;
  color: #fff;
  background-color: $bgColor;
}

.header .city-back {
  position: absolute;
  top: 0;
  left: 0.2rem;
  color: #fff;
}
</style>