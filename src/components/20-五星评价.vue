<template>
    <div>
        <ul class="item" v-for="(item,index) in arrlist" :key="index" v-on:mouseover="immigration(index)"
            v-on:mouseout="remove(index)" v-on:click="anchorage(index)">
            <li v-if="item[0]" class="list-none"></li>
            <li v-else class="list-bright"></li>
        </ul>
        <li>{{arrsize[num]}}</li>

    </div>

</template>
<script setup>
import { ref } from 'vue'
defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])
const num = ref("")
const numtoo = ref("")
const arrlist = ref([[true, true], [true, true], [true, true], [true, true], [true, true]])
const arrsize = ref(["一星", "二星", "三星", "四星", "五星"])
// 移入时变深色
function immigration(number) {
    if (numtoo.value != "" && number < numtoo.value) {
        for (let i = number + 1; i <= numtoo.value; i++) {
            arrlist.value[i][0] = true
        }
    }
    arrlist.value.forEach((item, index) => {
        if (!arrlist.value[index][1]) return
        if (number >= index) {
            arrlist.value[index][0] = false
        }
        if (numtoo.value === "") {
            num.value = number
        } else {
            num.value = numtoo.value
        }
    })
}
// 移出时取消变色
function remove(number) {
    let istrue = true
    arrlist.value.forEach((item, index) => {

        if (num >= index) {
            arrlist.value[index][0] = false
        }
        istrue = istrue && arrlist.value[index][1]
        if (!arrlist.value[index][1]) return
        arrlist.value[index][0] = true
    })
    if (istrue) {
        num.value = ""
    }
    if (numtoo.value != "") {
        arrlist.value.forEach((item, index) => {
            if (numtoo.value >= index) {
                arrlist.value[index][0] = false
            }
        })
    }
}
// 点击 五角星使其保持状态
function anchorage(number) {
    arrlist.value.forEach((item, index) => {
        if (number >= index) {
            arrlist.value[index][1] = false
        } else {
            arrlist.value[index][1] = true
        }
    })
    numtoo.value = number
    num.value = number
    emit('update:modelValue',1)
}
</script>
<style lang='less' scoped>
* {
    margin: 0;
    padding: 0;
    list-style: none;

}

div {

    display: flex;
    justify-content: flex-start;

    .list-none {
        width: 21px;
        height: 21px;
        background: url(../../public/123.png) no-repeat;
    }

    .list-bright {
        width: 21px;
        height: 21px;
        background: url(../../public/123.png) no-repeat left -25px;
    }
}
</style>
