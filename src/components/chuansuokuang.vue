<!-- 封装穿梭框 -->
<template>
    <div>
        <ol>
            <li>
                参照element框架中的<a href="https://element.eleme.cn/#/zh-CN/component/transfer"><b>穿梭框</b></a>完成基本功能
            </li>
            <li>可以全选、单选，可以统计出选中项/总项的数量，例如（4/14）</li>
            <li>中间按钮，可以将选中的选项，左移/右移至对应的选框中。</li>
            <li>中间按钮，只有在选中状态时，才可以点击，否则是disable状态</li>
        </ol>
    </div>
    <div class="box">
        <div class="shuttle_back_left">
            <div>
                <input type="checkbox" v-model="isCheckall_left"
                    v-on:click="check_all(listarr_left, isCheckall_left)" />全选列表1{{ "(" + left_list + "/" + left_length
                    + ")" }}
            </div>
            <ul>
                <li v-for="(item, index) in listarr_left" v-bind:key="index">
                    <input type="checkbox" v-model="item.isList" v-bind:disabled="item.disabled"
                        v-bind:id="index" /><label :for="index">{{ item.label
                        }}</label>
                </li>
            </ul>
        </div>
        <div class="shuttle_back_middle">
            <button v-on:click="move_left" :disabled="is_left_button">&lt;</button>
            <button v-on:click="move_right" :disabled="is_right_button">&gt;</button>
        </div>
        <div class="shuttle_back_right">
            <div>
                <input type="checkbox" v-model="isCheckall_right"
                    v-on:click="check_all(listarr_right, isCheckall_right)" />全选 列表二{{ "(" + right_list + "/" +
                    right_length + ")" }}
            </div>
            <ul>
                <li v-for="(item, index) in listarr_right" v-bind:key="index">
                    <input type="checkbox" v-model="item.isList" v-bind:disabled="item.disabled"
                        v-bind:id="index + '*'" /><label :for="index + '*'">{{
                        item.label }}</label>
                </li>
            </ul>
        </div>
    </div>
</template>
<script setup>
import { ref, reactive, computed, watch } from "vue";
const props = defineProps({
    data: {
        type: Array,
        default(rawProps){return[]}
    },
    value: {
        type: Object,
        required: false,
    }
})
const emit = defineEmits(['update:value'])

const listarr_leftRef = ref(JSON.parse(JSON.stringify(props.data)));
const listarr_rightRef = ref(JSON.parse(JSON.stringify(props.value)));
let listarr_left = listarr_leftRef.value
let listarr_right = listarr_rightRef.value
//单选，可以统计出选中项/总项的数量，例如（4/14）
const right_length = computed(() => listarr_right.length);
const left_length = computed(() => listarr_left.length);
const left_list = computed(() => {
    let num = 0;
    listarr_left.forEach(function (item) {
        if (item.isList) num++;
    });
    return num;
});
const right_list = computed(() => {
    let num = 0;
    listarr_right.forEach(function (item) {
        if (item.isList) num++;
    });
    return num;
});
// 全选
// const isCheckall_left = ref(false);
const isCheckall_left = computed({
    get() {
        let ischeck = true;

        let numdis = 0
        listarr_left.forEach((item) => {
            if (!item.disabled) {
                ischeck = ischeck && item.isList;
            } else {
                numdis++
            }
        });
        if (listarr_left.length === numdis) {
            ischeck = false;
        }
        return ischeck;
    },
    set(newvalue) {
    }
});
// const isCheckall_right = ref(false);
const isCheckall_right = computed({
    get() {
        let ischeck = true
        let numdis = 0
        listarr_right.forEach((item) => {
            if (!item.disabled) {
                ischeck = ischeck && item.isList;
            } else {
                numdis++
            }
        });
        if (listarr_right.length === numdis) {
            ischeck = false;
        }
        return ischeck;
    },
    set(newvalue) {
    }

});
function check_all(arr, ischeck) {
    if (ischeck) {
        ischeck = !ischeck;
        arr.forEach((item) => {
            if (!item.disabled)
                item.isList = false;
        });
    } else {
        ischeck = !ischeck;
        arr.forEach((item) => {
            if (!item.disabled)
                item.isList = true;
        });
    }
}

//中间按钮，可以将选中的选项，左移/右移至对应的选框中
function move_left() {
    for (let i = 0; i < listarr_right.length; i++) {
        if (listarr_right[i].isList) {
            listarr_right[i].isList = !listarr_right[i].isList;
            listarr_left.push(listarr_right[i]);
            listarr_right.splice(i, 1);
            i--;
        }
    }
}
function move_right() {
    for (let i = 0; i < listarr_left.length; i++) {
        if (listarr_left[i].isList) {
            listarr_left[i].isList = !listarr_left[i].isList;
            listarr_right.push(listarr_left[i]);
            listarr_left.splice(i, 1);
            i--;
        }
    }
}
// 传出包含选中项的数组
let comeoutKeyarr = []
//选中状态时，才可以点击，否则是disable状态
const is_left_button = ref(true);
const is_right_button = ref(true);
watch(listarr_left, (news) => {
    listarr_left.forEach(item => {
        if (item.isList == true) {
            if (comeoutKeyarr.indexOf(item) === -1)
                comeoutKeyarr.push(item)
        } else {
            if (comeoutKeyarr.indexOf(item) >= 0) {
                comeoutKeyarr.splice(comeoutKeyarr.indexOf(item), 1)
            }
        }
    })
    is_right_button.value = true;
    news.forEach((item) => {
        if (item.isList) {
            is_right_button.value = false;
        }
    });
});
// 排序
watch(() => listarr_left.length, () => {
    listarr_left = listarr_left.sort((a, b) => a.key - b.key)
})
watch(listarr_right, (news) => {
    listarr_right.forEach(item => {
        if (item.isList == true) {
            if (comeoutKeyarr.indexOf(item) === -1)
                comeoutKeyarr.push(item)
        } else {
            if (comeoutKeyarr.indexOf(item) >= 0) {
                comeoutKeyarr.splice(comeoutKeyarr.indexOf(item), 1)
            }
        }
    })
    is_left_button.value = true;
    news.forEach((item) => {
        if (item.isList) {
            is_left_button.value = false;
        }
    });
    emit('update:value',comeoutKeyarr)
});
// 排序
watch(() => listarr_right.length, () => {
    listarr_right = listarr_right.sort((a, b) => a.key - b.key)
})
</script>
<style scoped>
* {
    padding: 0;
    margin: 0;
    list-style: none;
}

.box {
    display: flex;
    justify-content: center;
    align-items: center;
}

.shuttle_back_middle {
    width: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
  