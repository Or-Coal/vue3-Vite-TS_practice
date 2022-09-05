<template>
    <div class="card my-3">
        <div class="card-header">计算属性的set/get</div>
        <div class="card-body">
            <form>
                <div class="mb-3 row">
                    <label class="col-sm-2 col-form-label">firstName：</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" v-model.trim="firstName">
                    </div>
                </div>
                <div class="mb-3 row">
                    <label class="col-sm-2 col-form-label">lastName：</label>
                    <div class="col-sm-10">
                        <input type="text" class="form-control" v-model.trim="lastName">
                    </div>
                </div>
                <div class="mb-3 row">
                    <label class="col-sm-2 col-form-label">fullName：</label>
                    <div class="col-sm-10">
                        <div class="input-group ">
                            <input v-model.trim="fullName" type="text" class="form-control">
                            <button @click="fullName = 'Tom Smith'" class="btn btn-secondary" type="button">
                                修改
                            </button>
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
            firstName: 'Jack',
            lastName: 'Son',
        }
    },
    computed: {
        fullName: {
            set(value) {
                //逆向推导
                console.log(value);
                let arr = value.split(' ');
                this.firstName = arr[0];
                this.lastName = arr[arr.length - 1];
            },
            get() {
                //正向推导
                return this.firstName + ' ' + this.lastName;
            },

        }
    }
}
</script>