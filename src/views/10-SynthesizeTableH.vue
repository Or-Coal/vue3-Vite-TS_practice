<template>
    <div class="container">
        <div class="table_box">
            <div class="head">
                <label for="" class="text_add">添加:</label>
                <input type="text" id="name" placeholder="姓名" v-model="name">
                <input type="text" id="age" placeholder="年龄" v-model="age">
                <button type="button" id="btn_add" class="button_add" v-on:click="addList">添加</button>
                <label for="" class="text_change">变色:</label>
                <button type="button" class="button_change_color" v-on:click="hoverColor">开启移入变色</button>
            </div>
            <div class="table">
                <table border="1px">
                    <thead>
                        <tr>
                            <td>ID</td>
                            <td>姓名</td>
                            <td>年龄</td>
                            <td>操作</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, index) in listArr" v-bind:key="index"
                            v-bind:class="{ back_yello: item.isSearch,hover_black:item.ishover}" v-on:mouseover="hoverlist(item)" >
                            <td>{{ index + 1 }}</td>
                            <td>{{ item.name }}</td>
                            <td>{{ item.age }}</td>
                            <td class="delect" v-on:click="removeList(item)">删除</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="search_box">
                <label class="search_text">搜索:</label>
                <input id="search_name" type="text" placeholder="姓名" v-model="serchtext">
                <button type="button" class="search_btn" v-on:click="searchFun">搜索</button>
                <label for="" class="sort_text">排序:</label>
                <button class="sort_button" v-on:click="sortList">年龄从小排序</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: '',
            age: '',
            serchtext: '',
            ishoverColor:false,
            listArr: [{ name: '张三', age: 3, isSearch: false ,ishover:false}, { name: '李四', age: 23, isSearch: false,ishover:false}, { name: '王五', age: 13, isSearch: false,ishover:false }, { name: '赵六', age: 73, isSearch: false,ishover:false }, { name: '刘七', age: 43, isSearch: false ,ishover:false}],

        }
    },
    methods: {
        addList() {
            if (this.name != "" && this.age != "") {
                this.listArr.push({ name: this.name, age: this.age, isSearch: false })
            }
            this.name = ""
            this.age = ""
        },
        sortList() {
            this.listArr.sort((a, b) => a.age - b.age)
        },
        searchFun() {
            for (var i = 0; i < this.listArr.length; i++) {
                // console.log(this.listArr[i])
                if (this.serchtext === this.listArr[i].name) {
                    console.log(this.listArr[i])
                    this.listArr[i].isSearch = true
                }else{
                    this.listArr[i].isSearch = false
                }
            }
        },
        removeList(item){
            for (var i = 0; i < this.listArr.length; i++) {
                // console.log(this.listArr[i])
                if (item === this.listArr[i]) {
                    this.listArr.splice(i,1)
                }
            }
        },
        hoverlist(item){
            if(this.ishoverColor){
                for (var i = 0; i < this.listArr.length; i++) {
                // console.log(this.listArr[i])
                if (item === this.listArr[i]) {
                    this.listArr[i].ishover = true
                    
                }else{
                    this.listArr[i].ishover = false

                }
            }
            }
        },
        hoverColor(){
            this.ishoverColor=!this.ishoverColor
            if(!this.ishoverColor){
                for (var i = 0; i < this.listArr.length; i++)  
                this.listArr[i].ishover = false;
            }
        }
    }
}
</script>

<style>
/* @import '@/reset.css'; */

.container {
    margin: 0 auto;
    width: 1107px;
}

.table_box {
    width: 1107px;
    box-shadow: 0 0 4px 2px;
    margin-top: 17px;
    padding: 20px 20px 50px;
}

#name,
#age,
#search_name {
    padding: 10px 12px;
    font-size: 12px;
    border-color: #cccccc;
    border-radius: 3px;
    color: #999999;
}

.head .text_add {
    color: #4f6f7d;
    font-size: 12px;
}

.head .button_change_color,
.head .button_add,
.search_box .search_btn,
.search_box .sort_button {
    padding: 11px 13px;
    font-size: 12px;
    color: #fff;
    background-color: #5bc0de;
    border: none;
}

.head .text_change,
.search_box .search_text .search_box .sort_text {
    font-size: 12px;
    color: #4f6f7d;
}

.table table {
    width: 1064px;
    border-color: #ddd;
    margin-top: 22px;
}

.table td {
    padding: 12px 9px;
}

.search_box {
    margin-top: 10px;
}

.table .back_yello {
    background-color: yellow;
}
.table .hover_black{
    background-color: #5bc0de;
}
</style>