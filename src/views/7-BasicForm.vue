<template>
    <div class="card my-3">
        <div class="card-header">基础表单</div>
        <div class="card-body">

            <form>
                <div class="row mb-3">
                    <label class="col-sm-2 col-form-label">账户：</label>
                    <div class="col-sm-10">
                        <input v-model="form.username" type="text" class="form-control">
                    </div>
                </div>
                <fieldset class="row mb-3">
                    <legend class="col-form-label col-sm-2 pt-0">性别：</legend>
                    <div class="col-sm-10">
                        <div class="form-check">
                            <input v-model="form.sex" class="form-check-input" type="radio" name="sex" value="1">
                            <label class="form-check-label">
                                男
                            </label>
                        </div>
                        <div class="form-check">
                            <input v-model="form.sex" class="form-check-input" type="radio" name="sex" value="0">
                            <label class="form-check-label">
                                女
                            </label>
                        </div>
                    </div>
                </fieldset>
                <div class="row mb-3">
                    <label class="col-sm-2 col-form-label">爱好：</label>
                    <div class="col-sm-10">
                        <div class="form-check">
                            <input v-model="form.favor" value="漫画" class="form-check-input" type="checkbox">
                            <label class="form-check-label">漫画</label>
                        </div>
                        <div class="form-check">
                            <input v-model="form.favor" value="摄影" class="form-check-input" type="checkbox">
                            <label class="form-check-label">摄影</label>
                        </div>
                        <div class="form-check">
                            <input v-model="form.favor" value="吉他" class="form-check-input" type="checkbox">
                            <label class="form-check-label">吉他</label>
                        </div>
                        <div class="form-check">
                            <input v-model="form.favor" value="手工" class="form-check-input" type="checkbox">
                            <label class="form-check-label">手工</label>
                        </div>
                    </div>
                </div>
                <div class="row mb-3">
                    <label class="col-sm-2 col-form-label">学历：</label>
                    <div class="col-sm-10">
                        <select v-model="form.degree" class="form-select">
                            <option value="1">专科</option>
                            <option value="2">本科</option>
                            <option value="3">研究生</option>
                            <option value="4">博士</option>
                        </select>
                    </div>
                </div>
                <button @click="handleSubmit" type="button" class="btn btn-primary me-3">注 册</button>
                <button @click="handleResort" type="button" class="btn btn-warning">还原表单</button>
            </form>

        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                username: '',
                sex: '',
                favor: [],
                degree: '',
            }
        }
    },
    methods: {
        //还原表单：
        handleResort() {
            this.form = {
                username: 'cyl',
                sex: '0',
                favor: ["摄影", "吉他"],
                degree: '2',
            }
        },
        //提取表单value：
        handleSubmit() {
            console.log(this.form);
        }
    },
}
</script>