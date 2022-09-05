<template>
    <div class="card my-3">
        <div class="card-header">watch深层侦听器</div>
        <div class="card-body">
            <form>
                <div class="py-3">
                    <input v-model.trim="form.keyword" placeholder="请输入关键词搜索名字" type="text" class="form-control">
                </div>
            </form>
            <ul class="list-group">
                <li v-for="item in filter_data" class="list-group-item">{{ item }}</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                keyword: '',
                andsoon: '',
            },
            origin_data: ["Tom", "Amy", "Kale", "Shadow", "Erse", "Kard", "Tony", "Mary", "Linda", "Susan"],
            filter_data: [],
        }
    },
    watch: {
        //单个深层监听
        "form.keyword": function (newValue, oldValue) {
            setTimeout(() => {
                this.filter_data = this.origin_data.filter((item) => item.includes(newValue));
            }, 500);
        },
        //整个form对象深层监听
        //如果使用watch监听一个对象，对比指针地址，所以一般不会执行，记得开深层监听
        form: {
            handler(newValue, oldValue) {
                // 在组件实例创建时会立即调用
                setTimeout(() => {
                    this.filter_data = this.origin_data.filter((item) => item.includes(newValue.keyword));
                }, 1000);
            },
            immediate: true,
            deep: true,
        }
    },

}
</script>