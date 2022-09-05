<template>
    <div class="card">
        <div class="card-header">倒计时</div>
        <div class="card-body">
            <form class="form-inline">
                <div class="form-group">
                    <label for="">总秒数：</label>
                    <input v-model="ts" type="text" class="form-control" placeholder="0">
                </div>
                <div class="form-group">
                    <button @click="start" type="button" class="btn btn-success">开始</button>
                </div>
                <div class="form-group">
                    <label for="">倒计时：</label>
                    <input v-model="count" type="text" class="form-control" placeholder="0">
                </div>
            </form>
        </div>
    </div>
    <div class="card">
        <div class="card-header">排序表格</div>
        <div class="card-body">
            <table class="table">
                <thead>
                    <tr>
                        <th @click="handleSort('id')">ID
                            <div v-show="order" class="triangle-up"></div>
                            <div v-show="!order" class="triangle-down"></div>
                        </th>
                        <th>商品</th>
                        <th @click="handleSort('price')">价格
                            <div v-show="order" class="triangle-up"></div>
                            <div v-show="!order" class="triangle-down"></div>
                        </th>
                        <th @click="handleSort('num')">销量
                            <div v-show="order" class="triangle-up"></div>
                            <div v-show="!order" class="triangle-down"></div>
                        </th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in products" :key="item.id">
                        <th>{{ item.id }}</th>
                        <td>{{ item.product }}</td>
                        <td>{{ item.price }}</td>
                        <td>{{ item.num }}</td>
                        <td>
                            <button @click="handleRemove(index)" type="button"
                                class="btn btn-outline-secondary">x</button>
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
            order: false,
            sequence: 1,
            ts: '',
            count: '',
            time: '',
            products: [
                { id: 8, product: '外套', price: 80, num: 500 },
                { id: 7, product: '相框', price: 70, num: 700 },
                { id: 5, product: '键盘', price: 69.9, num: 600 },
                { id: 6, product: '儿童玩具', price: 50, num: 400 },
                { id: 4, product: '数据线', price: 40.5, num: 200 },
                { id: 2, product: '鼠标', price: 30, num: 300 },
                { id: 3, product: '纸巾', price: 20.5, num: 1800 },
                { id: 1, product: '水杯', price: 10, num: 800 },
            ]
        }
    },
    methods: {
        start() {
            clearInterval(this.time);
            var input = parseInt(this.ts);
            if (!input) {
                alert('请输入数字！'); 
            }
            this.count = this.ts;
            this.time = setInterval(() => {
                this.count--;
                if (this.count <= 0) {
                    clearInterval(this.time);
                }
            }, 1000)
        },
        handleRemove(i) {
            this.products.splice(i, 1);
        },
        handleSort(type) {
            if (type === "id") {
                this.products.sort((itemA, itemB) => {
                    return (itemA.id - itemB.id) * this.sequence;
                })
                this.sequence = -this.sequence;
                this.order = !this.order;
            }
            if (type === "price") {
                this.products.sort((itemA, itemB) => {
                    return (itemA.price - itemB.price) * this.sequence;
                })
                this.sequence = -this.sequence;
                this.order = !this.order;
            }
            if (type === "num") {
                this.products.sort((itemA, itemB) => {
                    return (itemA.num - itemB.num) * this.sequence;
                })
                this.sequence = -this.sequence;
                this.order = !this.order;
            }
        }
    }
}
</script>
<style>
.card-body .table thead {
    background-color: #3D444c;
    color: white;
}

.table tr {
    text-align: center;
    vertical-align: middle;
}

.table th,
.table td {
    border: 2px solid #eeeeee;
}

.triangle-up {
    border: 7px solid transparent;
    border-bottom-color: white;
    display: inline-block;
}

.triangle-down {
    border: 7px solid transparent;
    border-top-color: white;
    display: inline-block;
}
</style>