<template>
  <div class="header">
    <div class="header-left">返回</div>
    <div class="header-middle">
      <div class="kw">输入城市/景点/游玩主题</div>
      <input
        class="header-input"
        type="text"
      />
    </div>
    <div class="header-right">城市</div>
  </div>
</template>

<script>
export default {
  name: "Home-Header",
};
</script>

<style lang="stylus" scoped>
.header {
  display: flex;
  width: 100%;
  height: 0.88rem;
  color: #fff;
  background-color: #00bcd4;
}

.header .header-left {
  width: 0.8rem;
  height: 100%;
  text-align: center;
  line-height: 0.88rem;
}

.header .header-middle {
  position relative;
  flex: 1;
  margin: 0.14rem;
}

.header .header-middle .kw {
  position: absolute;
  top: 0.18rem;
  left: 0.1rem;
  color: #e4e7ea;
}

.header .header-middle .header-input {
  width: 100%;
  height: 100%;
  border-radius: 0.06rem;
}

.header .header-right {
  width: 1.32rem;
  height: 100%;
  text-align: center;
  line-height: 0.88rem;
}
</style>