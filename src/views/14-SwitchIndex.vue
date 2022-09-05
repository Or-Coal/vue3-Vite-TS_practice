<template>
    <div class="card my-3">
        <div class="card-header">索引</div>
        <div class="card-body">
            <ol>
                <li>current 当前点击元素的索引</li>
                <li>当前点击元素的索引===按钮本身的索引</li>
            </ol>
            <div class="py-3">
                <!-- me-3 是 margin 的意思！ -->
                <!-- 每次点击current重新赋值 -->
                <button @click="current = index" v-for="(item, index ) in colors" :key="item.id"
                    class="btn btn-outline-warning me-3" :class="current === item.index" type="button">
                    {{ item.name }}
                </button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            //当前点击元素的索引
            current: -1,
            colors: [
                { id: 1, name: '红色' },
                { id: 2, name: '橙色' },
                { id: 3, name: '黄色' },
                { id: 4, name: '绿色' },
                { id: 5, name: '黑色' },
                { id: 6, name: '蓝色' },
                { id: 7, name: '紫色' },
            ]
        }
    },
    methods: {

    },
}
</script>