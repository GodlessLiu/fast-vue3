<template>
    <div class="footer" text="center">
        {{ value?.content }}
    </div>
</template>

<script setup lang="ts">
import { getSaying, sayingState } from '/@/api/index'
const value = ref<sayingState>()
onBeforeMount(() => {
    getSaying().then(res => {
        value.value = res.data
    })
})
</script>
<style lang='less' scoped></style>