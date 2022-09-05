<template>

    <div class="container">
        <div class="bgg">
            <div class="title">
                <span>添加：</span>
                <input v-model.trim="form.name" type="text" placeholder="姓名" id="name">
                <input v-model.trim="form.age" type="text" placeholder="年龄" id="age">
                <button @click="handleAdd" class="btnAdd" type="button">添加</button>
                <span>变色:</span>
                <button @click="handleChangeColor" class="btnStart" :class="{ MoveChangeColor: isMoveChange }"> 开启移入变色
                </button>
            </div>
            <div class="middle">
                <table class="table" width="80%" border="1">
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>姓名</td>
                            <td>年龄</td>
                            <td>操作</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, index) in person" :key="index"
                            :class="{ changeColor: item.Sresult, HoverChange: item.Mresult }"
                            @mouseover="handleHoverChange(item)">
                            <td>{{ index + 1 }}</td>
                            <td>{{ item.name }}</td>
                            <td>{{ item.age }}</td>
                            <td>
                                <button @click="handleRemove(index)" type="button"
                                    class="btn btn-outline-secondary">删除</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="bottom">
                <span>搜索:</span>
                <input v-model.trim="Sname" placeholder="姓名" type="text" id="serchname">
                <button @click="handleSearch" class="btnSearch" type="button">搜索</button>
                <span>排序:</span>
                <button @click="handleSort" class="btnSort" type="button">年龄排序</button>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    data() {
        return {
            //排序用到的order
            order: 1,
            Sname: '',
            isMoveChange: 'false',
            form: {
                name: '',
                age: '',
            },
            person: [
                { name: '黄小米', age: 26, Sresult: false, Mresult: false },
                { name: '红大米', age: 21, Sresult: false, Mresult: false },
                { name: '黑米', age: 18, Sresult: false, Mresult: false },
            ]
        }
    },
    methods: {
        handleAdd() {
            //增加对象（表单验证）
            if (this.form.name.length < 2 || this.form.name.length > 20) {
                alert('请输入正确的姓名!');
            }
            if (this.form.age != /^([1-9]\d?|1[01]\d|120)$/.test(age)) {
                alert('请输入正确的年龄!');
            }
            //深拷贝1
                let copy = JSON.parse(JSON.stringify(this.form));
                this.person.push(copy);

        },
        handleRemove(i) {
            //（在数组中）删除数据
            this.person.splice(i, 1);
        },
        handleSort() {
            this.person.sort((itemA, itemB) => {
                return (itemA.age - itemB.age) * this.order;
            });
            this.order = -this.order;
        },
        handleSearch() {
            if (this.Sname == '') {
                alert('请输入搜索内容！');
            }
            for (var i = 0; i < this.person.length; i++) {
                if (this.Sname === this.person[i].name) {
                    this.person[i].Sresult = true;
                } else {
                    this.person[i].Sresult = false;
                }
            }
        },
        handleChangeColor() {
            this.isMoveChange = !this.isMoveChange;
            if (!this.isMoveChange) {
                for (var i = 0; i < this.person.length; i++)
                    this.person[i].Mresult = false;
            }
        },
        handleHoverChange(item) {
            if (this.isMoveChange) {
                for (var i = 0; i < this.person.length; i++) {
                    console.log(i);
                    console.log(item);
                    if (item === this.person[i]) {
                        this.person[i].Mresult = true;
                    } else {
                        this.person[i].Mresult = false;
                    }
                }
            }
        },
    }
}
</script>

<style>
.bgg {
    background-color: white;
    width: 900px;
    border: 1px solid black;
}

.middle {
    margin-left: 20px;
    margin-right: 20px;
}

.btnAdd {
    background-color: aqua;
    border-radius: 3px;
}

.btnStart {
    background-color: aqua;
    border-radius: 3px;
}

.btnSort {
    background-color: aqua;
    border-radius: 3px;
}

.btnSearch {
    background-color: aqua;
    border-radius: 3px;
}

.title {
    margin: 10px 0 10px 20px;
}

.bottom {
    margin: 10px 0 20px 20px;
}

.changeColor {
    background-color: aquamarine;
}

.MoveChangeColor {
    background-color: plum;
}

.HoverChange {
    background-color: plum;
}
</style>