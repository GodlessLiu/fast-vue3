<template>
  <div>
    <router-view />
  </div>
</template>

<script setup lang="ts">
import { getUserProfile } from "/@/api/index"
getUserProfile()
</script>
<style lang='scss' scoped></style>