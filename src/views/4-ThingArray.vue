<template>
    <div class="card">
        <div class="card-header">事件传参</div>
        <div class="card-body">
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">书名</th>
                        <th scope="col">作者</th>
                        <th scope="col" @click="handleSort">单价</th>
                        <th scope="col">数量</th>
                        <th scope="col">操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in books" :key="item.id">
                        <td>{{  item.id  }}</td>
                        <td>{{  item.name  }}</td>
                        <td>{{  item.author  }}</td>
                        <td>{{  item.price  }}</td>
                        <td>
                            <button @click="handledown(item)" type="button" class="btn btn-outline-secondary">-</button>
                            <button type="button" class="btn btn-secondary">{{  item.num  }}</button>
                            <button @click="handleup(item)" type="button" class="btn btn-outline-secondary">+</button>
                        </td>
                        <td>
                            <button @click="handleRemove(index)" type="button"
                                class="btn btn-outline-secondary">X</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>


<script>
export default {
    data() {
        return {
            // 标示排序顺序
            order: 1,
            books: [
                { id: 1, author: '曹雪芹', name: '红楼梦', num: 1, price: 32.0 },
                { id: 2, author: '施耐庵', name: '水浒传', num: 3, price: 30.0 },
                { id: 3, author: '罗贯中', name: '三国演义', num: 2, price: 24.0 },
                { id: 4, author: '吴承恩', name: '西游记', num: 2, price: 20.0 },
            ]
        }
    },
    methods: {
        handleSort() {
            this.books.sort((itemA, itemB) => {
                return (itemA.price - itemB.price) * this.order;
            });
            this.order = -this.order;
        },
        handleRemove(i) {
            // console.log(i);
            this.books.splice(i, 1)
        },
        handleup(book) {
            // console.log(book)
            book.num++;
        },
        handledown(book) {
            // console.log(book)
            if (book.num > 1) {
                book.num--;
            }

        }
    },

};
</script>


<style>
</style>