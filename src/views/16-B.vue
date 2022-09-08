<template>
    <div> 


        <slot></slot>

        {{num}}
    </div>
</template>
<script setup>
defineProps(['num'])
</script>
<style lang='less' scoped> 
div{
    width:300px;
    height:60px;
    background-color:lawngreen;
}
</style>
