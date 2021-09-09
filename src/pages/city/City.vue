<template>
  <div>
    <city-header></city-header>
    <city-list></city-list>
  </div>
</template>

<script>
import axios from "axios";
import CityHeader from "./components/Header";
import CityList from "./components/List";

export default {
  name: "city",
  components: {
    "city-header": CityHeader,
    "city-list": CityList,
  },
  data: function () {
    return{
      hotcities:[],
    }
  },
  methods: {
    getCityInfo: function () {
      axios.get("/api/city.json").then(this.getCityInfoSuccess);
    },
    getCityInfoSuccess: function (res) {
      console.log(res);
    },
  },
  mounted: function () {
    this.getCityInfo();
  },
};
</script>

<style>
</style>