<template>
  <a :href="link">
    <f-main class="card">
      <f-text block bold>{{ title }}</f-text>
      <f-text size="12px" block>
        {{ introduce }}
      </f-text>
      <f-text size="12px">{{ createTime }}</f-text>
    </f-main>
  </a>
</template>
<script setup>
defineProps({
  title: String,
  introduce: String,
  link: String,
  createTime: String
})
</script>
<style lang="scss" scoped>
:root {
  --dark-mode-color: rgb(255, 255, 255, 0.87)
}

html[class="dark"] * {
  color: var(--dark-mode-color);
}

.card {
  cursor: pointer;
  margin-bottom: 30px;
}
</style>
