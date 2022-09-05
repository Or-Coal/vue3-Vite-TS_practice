<template>
    <div id="app">
        <ul v-for="item in aqiData">
            <li>{{  item[0]  }}空气质量：{{  item[1]  }}</li>
        </ul>
        <button @click="sort" type="button">从小到大排序</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            aqiData: [
                ["北京", 100],
                ["上海", 40],
                ["福州", 10],
                ["广州", 50],
                ["成都", 60],
                ["西安", 120]
            ]
        }
    },
    methods: {
        sort() {
            this.aqiData.sort((itemA, itemB) => {
                return (itemA[1] - itemB[1])
            });
        }
    }
}
</script>

<style>
</style>