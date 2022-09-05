<template>
    <table class="table">
        <thead class="table-dark">
            <tr>
                <th @click="handleSort(id)">ID
                    <div @click="handleSort(id)" :class="{ trangle: idtrangle, reverse: idreverse }"></div>

                </th>

                <th>商品</th>
                <th @click="handleSort(price)">价格
                    <div @click="handleSort(price)" :class="{ trangle: pricetrangle, reverse: pricereverse }"> </div>
                </th>
                <th @click="handleSort(sales)">销量
                    <div @click="handleSort(sales)" :class="{ trangle: salestrangle, reverse: salesreverse }"> </div>
                </th>
                <th>操作</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, index) in goods" :key="item.id">
                <td>{{ item.id }}</td>
                <td>{{ item.name }}</td>
                <td>{{ item.price }}</td>
                <td>{{ item.sales }}</td>
                <td>
                    <button @click="handleRemove(index)" type="button" class="btn btn-outline-secondary">X</button>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
export default {
    data() {
        return {
            idtrangle: 1,
            idreverse: 0,
            pricetrangle: 1,
            pricereverse: 0,
            salestrangle: 1,
            salesreverse: 0,
            order: 1,
            id: 'id',
            price: 'price',
            sales: 'sales',
            goods: [
                { id: 8, name: '外套', price: 80, sales: 500 },
                { id: 7, name: '相框', price: 70, sales: 700 },
                { id: 6, name: '键盘', price: 69.9, sales: 600 },
                { id: 5, name: '儿童玩具', price: 50, sales: 400 },
                { id: 4, name: '数据线', price: 40.5, sales: 200 },
                { id: 3, name: '鼠标', price: 30, sales: 300 },
                { id: 2, name: '纸巾', price: 20.5, sales: 1800 },
                { id: 1, name: '水杯', price: 10.0, sales: 800 },
            ]
        }
    },
    methods: {
        //删除按钮：
        handleRemove(i) {
            this.goods.splice(i, 1);
        },
        //排序按钮
        //有一个bug:箭头绑定同一个变量，当点击一个箭头时——改变方向时，另几个也会发生变化
        //给三个箭头分别定义各自的变量就好了
        handleSort(type) {
            if (type === "id") {
                this.goods.sort((itemA, itemB) => {
                    return (itemA.id - itemB.id) * this.order;
                });
                this.idreverse = !this.idreverse;
                this.idtrangle = !this.idtrangle;
            }
            if (type === "price") {
                this.goods.sort((itemA, itemB) => {
                    return (itemA.price - itemB.price) * this.order;
                });
                this.pricereverse = !this.pricereverse;
                this.pricetrangle = !this.pricetrangle;
            }
            if (type === "sales") {
                this.goods.sort((itemA, itemB) => {
                    return (itemA.sales - itemB.sales) * this.order;
                });
                this.salesreverse = !this.salesreverse;
                this.salestrangle = !this.salestrangle;
            }
            this.order = -this.order;
        },
        //排序按钮（teacher）
       
    }
}

</script>

<style>
.trangle {
    display: inline-block;
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-top: 5px solid white;
}

.reverse {
    display: inline-block;
    width: 0;
    height: 0;
    border: 5px solid transparent;
    border-bottom: 5px solid white;
}
</style>