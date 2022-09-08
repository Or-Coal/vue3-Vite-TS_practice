<template>
    <button type="button">
        <slot></slot>
    </button>
</template>
<script setup>
defineProps(['num'])
</script>
<style lang='less' scoped> 
button{
    width: 100px;
height: 100px;
}

</style>
