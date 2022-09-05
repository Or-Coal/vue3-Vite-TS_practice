<template>
    <div class="card my-3">
        <div class="card-header">watch侦听器</div>
        <div class="card-body">
            <form>
                <div class="py-3">
                    <input v-model.trim="keyword" placeholder="请输入关键词搜索名字" type="text" class="form-control">
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
            keyword: '',
            origin_data: ["Tom", "Amy", "Kale", "Shadow", "Erse", "Kard", "Tony", "Mary", "Linda", "Susan"],
            filter_data: [],
        }
    },
    watch: {
        //每当keyword发生改变时，都会运行此函数（注意命名规则）
        //页面打开一瞬间，（默认）不运行，只有keyword发生改变之后，才运行（特点1）
        keyword(newValue, oldValue) {
            // console.log('%s=>%s', oldValue, newValue)         
            //模拟异步ajax---副作用
            setTimeout(() => {
                this.filter_data = this.origin_data.filter((item) => item.includes(newValue));
            }, 500);
        }
    },
}
</script>