<template>
    <form class="row g-3">
        <div class="col-auto">
            <span>总秒数:</span>
        </div>
        <div class="col-auto">
            <input type="text" v-model="time" class="form-control">
        </div>
        <div class="col-auto">
            <button @click="start" type="button" class="btn btn-primary mb-3">开始</button>
        </div>
        <div class="col-auto">
            <span>倒计时:</span>
        </div>
        <div class="col-auto">
            <input v-model="down" type="text" class="form-control">
        </div>
    </form>
</template>
<script>
export default {
    data() {
        return {
            time: 0,
            down: 0,
            clock: '',
        }
    },
    methods: {
        //     start() {
        //         //每次调用前，先清除定时器
        //         clearInterval(this.clock);
        //         //获取input框的输入值
        //         this.down = this.time;
        //         this.clock = setInterval(() => {
        //             if (this.down === 1) {
        //                 clearInterval(this.clock);
        //             }
        //             this.down--;
        //         }, 1000)
        //     }
        // },
        start() {
            clearInterval(this.clock);
            this.down = this.time;
            this.clock = setInterval(() => {
                if (this.down >= 1) {
                    this.down -= 1;
                }
            }, 1000);
        }
    }
}
</script>