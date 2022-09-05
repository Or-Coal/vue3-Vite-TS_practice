<template>
    <div class="card">
        <div class="card-header">未使用 语法糖</div>
        <div class="card-body">
            <form>
                <div class="mb-3">原始信息：{{ message }} </div>
                <div class="mb-3">
                    <input type="text" v-model.trim="message">
                </div>
                <div class="mb-3">翻转之后：{{ reversedMessage }}</div>
            </form>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            message: 'Hello Vue!',
        }
    },
    computed: {
        reversedMessage() {
            //推导过程
            var arr = this.message.split('');
            var result = arr.reverse().join('');
            //return 结果：
            return result;
        }
    }
}
</script>
<style>
</style>