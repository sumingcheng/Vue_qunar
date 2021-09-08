<template>
  <div>
    <city-header></city-header>
    <city-list></city-list>
  </div>
</template>

<script>
import CityHeader from "./components/Header";
import CityList from "./components/List";

export default {
  name: "city",
  components: {
    "city-header": CityHeader,
    "city-list": CityList,
  },
};
</script>

<style>
</style>