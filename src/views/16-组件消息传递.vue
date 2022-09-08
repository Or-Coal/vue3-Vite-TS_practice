<template>
    <div class="aaa">
        <div> 
            <div v-for="(item,index) in arrlist" :key="index">
    <A v-if="item%2==0" :num="item">我是A组件</A>
    <B v-else :num="item">我是B组件</B>
            </div>


    </div>
    <div class="bbb">
    <btn v-on:click="add">A [+]</btn>
    <btn v-on:click="remove">B [-]</btn>
    <btn v-on:click="plus">C [+1]</btn>
    <btn v-on:click="subtract">D [-1]</btn>
    </div>
    </div>
    
</template>
<script setup>
import A from "@/views/16-A.vue"
import B from "@/views/16-B.vue"
import btn from "@/views/16-BUTTON.vue"
import {ref} from 'vue'
const arrlist = ref([aaa(),aaa(),aaa(),])
function aaa(){ return Math.round(Math.random()*100)}
function add(){ arrlist.value.push(aaa())}
function remove(){ arrlist.value.pop()}
function plus(){ arrlist.value = arrlist.value.map((i)=>{return ++i})}
function subtract(){ arrlist.value = arrlist.value.map((i)=>{return --i})}
</script>
<style lang='less' scoped> 
.aaa{
    display: flex;
    justify-content: space-around;
    .bbb{
        display: flex;
        flex-direction:column;
    }
}
</style>
