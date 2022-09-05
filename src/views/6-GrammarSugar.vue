<template>
    <div>
        <div class="card">
            <div class="card-header">未使用 语法糖</div>
            <div class="card-body">
                <form>
                    <div class="mb-3">
                        <label class="form-label">账户：</label>
                        <!-- event.target 为触发事件的元素（这里指input框） -->
                        <input :value="username" @input="username = $event.target.value" type="text"
                            class="form-control">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">密码：</label>
                        <input type="password" class="form-control">
                    </div>
                    <button type="button" class="btn btn-primary">登录</button>
                </form>
            </div>
        </div>
        <div class="card">
            <div class="card-header">语法糖——v-model</div>
            <div class="card-body">
                <form>
                    <div class="mb-3">
                        <label class="form-label">信息：</label>
                        <!-- event.target 为触发事件的元素（这里指input框） -->
                        <input v-model="message" type="text" class="form-control">
                    </div>
                </form>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    data() {
        return {
            username: 'cyl',
            message:'你好！'
        }
    }
}
</script>