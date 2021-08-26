<template>
  <div>
    {{msg}}
    <router-link to="/">Home</router-link>
  </div>
</template>

<script>
  export default {
    name: "标注一个名字",
    data() {
      return {
        msg: "listlistlist",
      };
    },
  };
</script>

<style>
</style>