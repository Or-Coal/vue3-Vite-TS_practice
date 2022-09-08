<template>
  <div>
    <ol>
      <li>
        参照element框架中的<a
          href="https://element.eleme.cn/#/zh-CN/component/transfer"
          ><b>穿梭框</b></a
        >完成基本功能
      </li>
      <li>可以全选、单选，可以统计出选中项/总项的数量，例如（4/14）</li>
      <li>中间按钮，可以将选中的选项，左移/右移至对应的选框中。</li>
      <li>中间按钮，只有在选中状态时，才可以点击，否则是disable状态</li>
    </ol>
  </div>
  <div class="box">
    <div class="shuttle_back_left">
      <div>
        <input
          type="checkbox"
          v-model="isCheckall_left"
          v-on:click="check_all(listarr_left, isCheckall_left)"
        />全选列表1{{ "(" + left_list + "/" + left_length + ")" }}
      </div>
      <ul>
        <li v-for="(item, index) in listarr_left" v-bind:key="index">
          <input
            type="checkbox"
            v-model="item.isList"
            v-bind:id="index"
          /><label :for="index">{{ item.list }}</label>
        </li>
      </ul>
    </div>
    <div class="shuttle_back_middle">
      <button v-on:click="move_left" :disabled="is_left_button">&lt;</button>
      <button v-on:click="move_right" :disabled="is_right_button">&gt;</button>
    </div>
    <div class="shuttle_back_right">
      <div>
        <input
          type="checkbox"
          v-model="isCheckall_right"
          v-on:click="check_all(listarr_right, isCheckall_right)"
        />全选 列表二{{ "(" + right_list + "/" + right_length + ")" }}
      </div>
      <ul>
        <li v-for="(item, index) in listarr_right" v-bind:key="index">
          <input
            type="checkbox"
            v-model="item.isList"
            v-bind:id="index + '*'"
          /><label :for="index + '*'">{{ item.list }}</label>
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup>
import { ref, reactive, computed, watch } from "vue";
const listarr_left = reactive([
  { list: "备选项1", isList: false },
  { list: "备选项2", isList: false },
  { list: "备选项3", isList: false },
  { list: "备选项4", isList: false },
  { list: "备选项5", isList: false },
  { list: "备选项6", isList: false },
  { list: "备选项7", isList: false },
  { list: "备选项8", isList: false },
  { list: "备选项9", isList: false },
]);
const listarr_right = reactive([
  { list: "备选项10", isList: false },
  { list: "备选项11", isList: false },
  { list: "备选项12", isList: false },
  { list: "备选项13", isList: false },
  { list: "备选项14", isList: false },
  { list: "备选项15", isList: false },
  { list: "备选项16", isList: false },
  { list: "备选项17", isList: false },
  { list: "备选项18", isList: false },
]);
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
const isCheckall_left = computed(() => {
  let ischeck = true;
  listarr_left.forEach((item) => {
    ischeck = ischeck && item.isList;
  });
  if (listarr_left.length === 0) {
    ischeck = false;
  }
  return ischeck;
});
// const isCheckall_right = ref(false);
const isCheckall_right = computed(() => {
  let ischeck = true;
  listarr_right.forEach((item) => {
    ischeck = ischeck && item.isList;
  });
  if (listarr_right.length === 0) {
    ischeck = false;
  }
  return ischeck;
});
function check_all(arr, ischeck) {
  if (ischeck) {
    ischeck = !ischeck;
    arr.forEach((item) => {
      item.isList = false;
    });
  } else {
    ischeck = !ischeck;
    arr.forEach((item) => {
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
//选中状态时，才可以点击，否则是disable状态
const is_left_button = ref(true);
const is_right_button = ref(true);
watch(listarr_left, (news) => {
  is_right_button.value = true;
  news.forEach((item) => {
    if (item.isList) {
      is_right_button.value = false;
    }
  });
});
watch(listarr_right, (news) => {
  is_left_button.value = true;
  news.forEach((item) => {
    if (item.isList) {
      is_left_button.value = false;
    }
  });
});
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
