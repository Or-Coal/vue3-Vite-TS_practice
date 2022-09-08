<script setup></script>

<template>
  <div>
    <router-link to="/home" class="list-group-item list-group-item-action"
      >主页</router-link
    >
    <span>aaa</span>
  </div>

  <router-view></router-view>
</template>

<style lang="less">
div {
  span {
    background-color: red;
  }
}
</style>

