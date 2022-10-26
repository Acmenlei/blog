<template>
  <f-main class="main">
    <f-text bold size="20px"> 最新内容 😊</f-text>
    <f-divider type="dashed" size="40px" color="#ccc"></f-divider>
    <Card v-for="item in recommondedData" 
          :title="item.title" 
          :create-time="item.createTime"
          :introduce='item.introduce' 
          :link='item.link' />

  </f-main>
</template>

<script setup>
import Card from "../components/card.vue"
import recommondedData from '../utils/recommonded.ts';

</script>

<style lang="scss" scoped>
:root {
  --dark-mode-color: rgb(255, 255, 255, 0.87)
}
html[class="dark"] {
  .f-text {
    color:  var(--dark-mode-color);
  }
}

.main {
  padding: 20px;
  max-width: 600px;
  margin: 40px auto;
}
</style>
