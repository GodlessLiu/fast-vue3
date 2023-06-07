<template>
    <div text="primary">
        <a href="https://github.com/GodlessLiu/fast-vue3" tatget="_blank">
            <Svgicon name="svg-github"></Svgicon>
        </a>
        <div text="4xl gray-700">
            hello world
        </div>
        {{ value?.content }}
        <div text="right">
            --- {{ value?.author }}
        </div>
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
<style lang='scss' scoped></style>