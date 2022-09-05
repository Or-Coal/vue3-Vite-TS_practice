<template>
    <div class="card">
        <div class="card-header">
            留言板
        </div>
        <div class="card-body">
            <form>
                <div class="mb-3">
                    <label class="form-label">昵称：</label>
                    <input v-model.trim="form.nickname" type="text" class="form-control" placeholder="请填写昵称">
                </div>
                <div class="mb-3">
                    <label class="form-label">留言：</label>
                    <textarea v-model.trim="form.message" class="form-control" rows="3"></textarea>
                </div>
                <button v-show="!isEdit" @click="handlePost" type="button" class="btn btn-primary me-3">发表留言</button>
                <button v-show="isEdit" @click="handleAlter(flag)" type="button" class="btn btn-warning">保存修改</button>
            </form>
        </div>
    </div>
    <!-- 留言列表 -->
    <div class="card mt-4">
        <div class="card-header">
            最新留言
        </div>
        <ul class="list-group list-group-flush">
            <li v-for="(item, index) in messages" class="list-group-item">
                <div class="py-2"><span class="text-primary">{{  item.nickname  }}</span> 说:</div>
                <div class="d-flex justify-content-between align-items-center">
                    <div class="content">{{  item.message  }}</div>
                    <div class="actions">
                        <button @click='isEdit ? "" : handleRemove(index)' type="button"
                            class="btn btn-sm btn-danger me-1">删除</button>
                        <button @click="handleResort(item, index)" type="button"
                            class="btn btn-sm btn-primary">编辑</button>
                    </div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isEdit: false,
            flag: '',
            form: {
                nickname: '',
                message: '',

            },
            messages: [
                { nickname: '黄小米', message: '世界那么大，我想去看看！' }
            ]
        }
        // console.log(messages);
    },
    methods: {
        handlePost() {
            //获取表单内容
            // console.log(this.form);
            //浅层拷贝：
            // var obj = {};
            // obj.nickname = this.form.nickname;
            // obj.message = this.form.message;

            //深拷贝1
            let copy = JSON.parse(JSON.stringify(this.form));
            //深拷贝2(递归)

            this.messages.push(copy);
        },

        //（在数组中）删除数据
        handleRemove(i) {
            // console.log(i);
            this.messages.splice(i, 1);
        },

        //（找到对应元素） 还原表单
        handleResort(i, j) {
            // console.log(i),
            this.form = {
                nickname: i.nickname,
                message: i.message,
            }
            this.flag = j;
            this.isEdit = true;
        },

        handleAlter(x) {
            //深拷贝1
            let copy = JSON.parse(JSON.stringify(this.form));
            this.messages.splice(x, 1, copy);
            this.isEdit = false;
        },
    }

}
</script>

<style>
/* .btn.isshow{
        display: block;
    } */
</style>