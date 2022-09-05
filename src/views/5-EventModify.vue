<template>
    <div @click="handleOuter" class="bg-primary p-5">
        <p>外部</p>
        <div @click.stop="handleInner" class="bg-warning p-5">
            <p>内部</p>
            <a @click.prevent.stop href="http://www.baidu.com">百度一下</a>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        handleInner() {
            //阻止事件冒泡
            // 方式一（传参event——JS手动）：
            // event.stopPropagation();
            // 方式二@click.stop(上文点击事件时 增加)
            console.log('内部触发');
        },
        handleOuter() {
            console.log('外部触发');
        },
    }
}
</script>