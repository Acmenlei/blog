<template>
  <a :href="link">
    <f-main class="card">
      <f-text block bold>{{ title }}</f-text>
      <f-text size="12px" block>
        {{ introduce }}
      </f-text>
    </f-main>
  </a>
</template>
<script setup>
defineProps({
  title: String,
  introduce: String,
  link: String
})
</script>
<style scoped>
.card {
  cursor: pointer;
  margin-bottom: 30px;
}
</style>
