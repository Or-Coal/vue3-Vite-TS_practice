<template>
    <div class="card my-3">
        <div class="card-header">修饰符</div>
        <div class="card-body">
            <form>
                <div class="row mb-3">
                    <label class="col-sm-1 col-form-label">姓名：</label>
                    <div class="col-sm-11">
                        <input v-model.trim="fullname" type="text" class="form-control">
                    </div>
                </div>
                <div class="row mb-3">
                    <label class="col-sm-1 col-form-label">语文：</label>
                    <div class="col-sm-11">
                        <div class="input-group">
                            <input v-model.number="chinese" type="text" class="form-control">
                            <span class="input-group-text">分</span>
                        </div>
                    </div>
                </div>
                <div class="row mb-3">
                    <label class="col-sm-1 col-form-label">数学：</label>
                    <div class="col-sm-11">
                        <div class="input-group">
                            <input v-model.number="math" type="text" class="form-control">
                            <span class="input-group-text">分</span>
                        </div>
                    </div>
                </div>
                <div class="row mb-3">
                    <label class="col-sm-1 col-form-label">英语：</label>
                    <div class="col-sm-11">
                        <div class="input-group">
                            <input v-model.number="english" type="text" class="form-control">
                            <span class="input-group-text">分</span>
                        </div>
                    </div>
                </div>
                <div class="row mb-3">
                    <label class="col-sm-1 col-form-label">总分：</label>
                    <div class="col-sm-11">
                        <div class="input-group">
                            <input :value="chinese + math + english"  type="text" class="form-control">
                            <span class="input-group-text">分</span>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>

</template>
<script>
export default {
    data() {
        return {
            fullname: '',
            chinese: '',
            math: '',
            english: ''

        }
    },
}
</script>

