<template>
  <div class="list-group me-5">
    <router-link to="/" class="list-group-item list-group-item-action"
      >主页</router-link
    >
    <router-link to="/array" class="list-group-item list-group-item-action"
      >数组</router-link
    >
    <router-link to="/modify" class="list-group-item list-group-item-action"
      >修饰符</router-link
    >
    <router-link to="/sugar" class="list-group-item list-group-item-action"
      >语法糖</router-link
    >
    <router-link to="/form" class="list-group-item list-group-item-action"
      >基础表单</router-link
    >
    <router-link to="/form2" class="list-group-item list-group-item-action"
      >总分数</router-link
    >
    <router-link to="/board" class="list-group-item list-group-item-action"
      >留言板</router-link
    >
    <router-link to="/table" class="list-group-item list-group-item-action"
      >表格</router-link
    >
    <router-link to="/tableM" class="list-group-item list-group-item-action"
      >一个函数三个应用</router-link
    >
    <router-link to="/downM" class="list-group-item list-group-item-action"
      >倒计时器</router-link
    >
    <router-link to="/downB" class="list-group-item list-group-item-action"
      >倒计时器B</router-link
    >
    <router-link to="/computed" class="list-group-item list-group-item-action"
      >计算属性</router-link
    >
    <router-link
      to="/computed/apply"
      class="list-group-item list-group-item-action"
      >计算属性应用</router-link
    >
    <router-link
      to="/computed/setter"
      class="list-group-item list-group-item-action"
      >计算属性setter</router-link
    >
    <router-link
      to="/computed/table"
      class="list-group-item list-group-item-action"
      >计算属性表格</router-link
    >
    <router-link
      to="/watch/basic"
      class="list-group-item list-group-item-action"
      >侦听器基础</router-link
    >
    <router-link
      to="/watch/immediate"
      class="list-group-item list-group-item-action"
      >侦听器（立即执行）</router-link
    >
    <router-link to="/watch/deep" class="list-group-item list-group-item-action"
      >侦听器（深层）</router-link
    >
    <router-link
      to="/custom/data"
      class="list-group-item list-group-item-action"
      >自定义数据实现点击按钮</router-link
    >
    <router-link
      to="/switch/index"
      class="list-group-item list-group-item-action"
      >索引实现点击按钮</router-link
    >
    <router-link
      to="/vueweekendtest1"
      class="list-group-item list-group-item-action"
      >vue周测试1</router-link
    >
    <router-link to="/chuansuo" class="list-group-item list-group-item-action"
      >穿梭框</router-link
    >
  </div>
</template>

<script>
export default {
  name: "HomeView",
  components: {},
};
</script>
