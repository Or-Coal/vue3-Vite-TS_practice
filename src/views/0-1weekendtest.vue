<template>
    <div id="app" class="container">
        <div class="card mb-3">
            <div class="card-header bg-dark text-white">
                作业要求
            </div>
            <div class="card-body">
                <ol>
                    <li>在表单中填写数据，点击录入按钮，插入新的学生成绩。</li>
                    <li>渲染表格的数据，并显示每一个学生的总分，<b class="text-danger">PS</b>:并不需要添加总分这一字段。</li>
                    <li>点击表格的表头【数学、语文、英语】，对应的数据按照从大到小排序，<b class="text-danger">再次点击</b>从小到大排序。</li>
                    <li>选择班级，填入学生姓名，点击搜索按钮，<b class="text-danger">高亮</b>显示符合条件的学生</li>
                    <li>选择科目，填入分数最小值，最大值，验证两个数值大小顺序，点击筛选按钮，<b class="text-danger">高亮</b>符合条件的学生</li>
                    <li><b class="text-danger">附加题</b>：选择科目，填入分数最小值，最大值，验证两个数值大小顺序，点击筛选按钮，<b
                            class="text-danger">只显示</b>符合条件的学生</li>
                </ol>
            </div>
        </div>
        <div class="card mb-3">
            <div class="card-header text-white bg-dark">
                录入成绩
            </div>
            <div class="card-body">
                <form>
                    <div class="form-group row">
                        <label class="col-sm-2 col-form-label">姓名： </label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" v-model="formData.name" placeholder="请输入学生姓名">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-2 col-form-label">班级：</label>
                        <div class="col-sm-10">
                            <select v-model="formData.class" class="form-control">
                                <option value="三年级1班">三年级1班</option>
                                <option value="三年级2班">三年级2班</option>
                                <option value="三年级3班">三年级3班</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-2 col-form-label">数学：</label>
                        <div class="col-sm-10">
                            <input type="number" class="form-control" v-model="formData.Math" placeholder="请输入数学成绩">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-2 col-form-label">语文：</label>
                        <div class="col-sm-10">
                            <input type="number" class="form-control" v-model="formData.Chinese" placeholder="请输入语文成绩">
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-2 col-form-label">英语：</label>
                        <div class="col-sm-10">
                            <input type="number" class="form-control" v-model="formData.English" placeholder="请输入英语成绩">
                        </div>
                    </div>
                    <div class="form-group">
                        <button @click="insertHandle" type="button" class="btn btn-primary">录入</button>
                    </div>
                </form>
            </div>
        </div>
        <div class="card mb-3">
            <div class="card-header text-white bg-dark">
                筛选搜索
            </div>
            <div class="card-body">
                <form>
                    <div class="form-group row">
                        <label class="col-sm-1 col-form-label">搜索</label>
                        <div class="input-group col-sm-5">
                            <select v-model="sclass" class="form-control">
                                <option value="三年级1班">三年级1班</option>
                                <option value="三年级2班">三年级2班</option>
                                <option value="三年级3班">三年级3班</option>
                            </select>
                        </div>
                        <div class="input-group col-sm-6">
                            <input v-model.trim="sname" type="text" class="form-control" placeholder="请输入学生姓名">
                            <div class="input-group-append">
                                <button @click="handleSearch" class="btn btn-primary" type="button">搜索</button>
                            </div>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-1 col-form-label">筛选</label>
                        <div class="input-group col-sm-5">
                            <div class="input-group-prepend">
                                <select v-model="screenobject" class="form-control">
                                    <option value="Math">数学</option>
                                    <option value="Chinese">语文</option>
                                    <option value="English">英语</option>
                                </select>
                            </div>
                            <input v-model="minscore" type="text" class="form-control" placeholder="分数最小值">
                        </div>
                        <div class="col-sm-1 text-center">——</div>
                        <div class="input-group col-sm-5">
                            <input v-model="maxscore" type="text" class="form-control" placeholder="分数最大值">
                            <div class="input-group-append">
                                <button @click="handleScreen" class="btn btn-primary" type="button">筛选</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
        <table class="table table-bordered">
            <thead class="thead-dark">
                <tr>
                    <th>#</th>
                    <th>班级</th>
                    <th>姓名</th>
                    <th @click="handleSort('Math')">数学</th>
                    <th @click="handleSort('Chinese')">语文</th>
                    <th @click="handleSort('English')">英语</th>
                    <th>总分</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in scoresCopy" :key="item.id"
                    :class="{ changecolor: item.isSearch, screencolor: item.isScreen }">
                    <td>{{ index + 1 }}</td>
                    <td>{{ item.class }}</td>
                    <td>{{ item.name }}</td>
                    <td>{{ item.Math }}</td>
                    <td>{{ item.Chinese }}</td>
                    <td>{{ item.English }}</td>
                    <td>{{ item.Math + item.Chinese + item.English }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
export default {
    data() {
        return {
            Math: 1,
            Chinese: 1,
            English: 1,
            sname: '',
            sclass: '',
            minscore: '',
            maxscore: '',
            screenobject: '',
            formData: {
                name: '',
                class: '',
                Math: '',
                Chinese: '',
                English: '',
                isSearch: false,
                isScreen: false,
            },
            scores: [
                { isScreen: false, isSearch: false, name: 'Bob', class: '三年级2班', Math: 97, Chinese: 89, English: 67 },
                { isScreen: false, isSearch: false, name: 'Tom', class: '三年级1班', Math: 67, Chinese: 52, English: 98 },
                { isScreen: false, isSearch: false, name: 'Jerry', class: '三年级2班', Math: 72, Chinese: 87, English: 89 },
                { isScreen: false, isSearch: false, name: 'Ben', class: '三年级1班', Math: 92, Chinese: 87, English: 59 },
                { isScreen: false, isSearch: false, name: 'Chan', class: '三年级3班', Math: 47, Chinese: 85, English: 92 },
            ],
            scoresCopy: []
        }
    },
    methods: {
        //插入数据
        insertHandle() {
            //先将四个input框进行表单验证：
            if (this.formData.name.length < 2 || this.formData.name.length > 20) {
                alert('请输入正确的姓名!');
                this.nameRE = 0;
            } else {
                this.nameRE = 1;
            }
            if (this.formData.Math < 0 || this.formData.Math > 100 || this.formData.Math === "") {
                alert('请输入正确的数学分数（0—100）且不能为空');
                this.mathRE = 0
            } else {
                this.mathRE = 1;
            }
            if (this.formData.Math < 0 || this.formData.Math > 100 || this.formData.Math === "") {
                alert('请输入正确的语文分数（0—100）且不能为空');
                this.chineseRE = 0;
            } else {
                this.chineseRE = 1;
            }
            if (this.formData.Math < 0 || this.formData.Math > 100 || this.formData.Math === "") {
                alert('请输入正确的英语分数（0—100）且不能为空');
                this.englishRE = 0;
            } else {
                this.englishRE = 1;
            }
            //表单验证通过，再进行插入操作：
            if (this.nameRE === 1 & this.mathRE === 1 & this.chineseRE === 1 & this.englishRE === 1) {
                let copy = JSON.parse(JSON.stringify(this.formData));
                this.scores.push(copy);
            }
        },
        //排序
        handleSort(type) {
            this[type] = -this[type];
            this.scores.sort((itemA, itemB) => {
                return (itemA[type] - itemB[type]) * this[type];
            });
        },
        //搜索按钮：
        handleSearch() {
            //保证搜索内容不能为空：
            if (this.sname == '') {
                alert('请输入搜索内容~');
            }
            //保证班级不能为空：
            if (this.sclass == '') {
                alert('请输入搜索班级~');
            }
            //将复合的数据 切换颜色：
            for (var i = 0; i < this.scores.length; i++) {
                if (this.sname === this.scores[i].name && this.sclass === this.scores[i].class) {
                    this.scores[i].isSearch = true;
                }
            }
        },
        //筛选按钮只显示符合条件的
        handleScreen() {
            //保证最大数大于等于最小数：
            if (this.minscore - this.maxscore > 0) {
                alert('请输入正确的分数区间~');
            }
            this.scoresCopy = []
            var Object = this.screenobject;
            for (var i = 0; i < this.scores.length; i++) {
                this.scores[i].isScreen = false;
                if (this.minscore <= this.scores[i][Object] && this.maxscore >= this.scores[i][Object]) {
                    this.scoresCopy.push(this.scores[i])
                }
            }
        },
    },
    watch: {
        scores: {
            handler(newValue) {
                this.scoresCopy = newValue
            },
            deep: true,
            immediate: true
        }
    }
}
</script>
<style>
.changecolor {
    background-color: aqua;
}

.screencolor {
    background-color: aquamarine;
}
</style>