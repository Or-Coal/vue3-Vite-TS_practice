<template>
    <div class="card my-3">
        <div class="card-header">自定义数据</div>
        <div class="card-body">
            <ol>
                <li>data里面可以自定义 辅助数据——帮助我们实现某些功能</li>
            </ol>
            <div class="py-3">
                <!-- me-3 是 margin 的意思！ -->
                <button @click="handleSelect(item)" v-for="item in colors" :key="item.id"
                    class="btn btn-outline-warning me-3" :class="{ active: item.selected }" type="button">
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
            isclick: 0,
            colors: [
                { id: 1, name: '红色', selected: false },
                { id: 2, name: '橙色', selected: false },
                { id: 3, name: '黄色', selected: false },
                { id: 4, name: '绿色', selected: false },
                { id: 5, name: '黑色', selected: false },
                { id: 6, name: '蓝色', selected: false },
                { id: 7, name: '紫色', selected: true },
            ]
        }
    },
    methods: {
        handleSelect(color) {
            // 方法一：
            this.colors.forEach((item) => {
                if (item.id === color.id) {
                    item.selected = true;
                } else {
                    item.selected = false;
                }
            })
            //方法二：
            this.colors.forEach((item) => {
                item.selected = item.id === color.id;
            })
        }
    },
}
</script>