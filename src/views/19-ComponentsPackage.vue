<script setup>
import FiveStarEvaluation from '@/components/20-五星评价.vue'
import Counter from '@/components/Counter (1).vue';
import chuansuokuang from '@/components/chuansuokuang.vue';
import { ref, computed, reactive } from 'vue';
const listarr_left = reactive([
	{ key: 0, label: "备选项1", disabled: false, isList: false },
	{ key: 1, label: "备选项2", disabled: false, isList: false },
	{ key: 2, label: "备选项3", disabled: false, isList: false },
	{ key: 3, label: "备选项4", disabled: true, isList: false },
	{ key: 4, label: "备选项5", disabled: false, isList: false },
	{ key: 5, label: "备选项6", disabled: false, isList: false },
	{ key: 6, label: "备选项7", disabled: false, isList: false },
	{ key: 7, label: "备选项8", disabled: false, isList: false },
	{ key: 8, label: "备选项9", disabled: false, isList: false },
]);
const listarr_right = reactive([
	{ key: 9, label: "备选项10", disabled: false, isList: false },
	{ key: 10, label: "备选项11", disabled: false, isList: false },
	{ key: 11, label: "备选项12", disabled: true, isList: false },
	{ key: 12, label: "备选项13", disabled: false, isList: false },
	{ key: 13, label: "备选项14", disabled: false, isList: false },
	{ key: 14, label: "备选项15", disabled: true, isList: false },
	{ key: 15, label: "备选项16", disabled: false, isList: false },
	{ key: 16, label: "备选项17", disabled: false, isList: false },
	{ key: 17, label: "备选项18", disabled: false, isList: false },
]);

function time() {
	return new Date()
}
let WangZai = ref(3)
let order = ref(1);
let books = reactive([
	{ id: 1, author: '曹雪芹', name: '红楼梦', num: 3, price: 32.0, checked: false },
	{ id: 2, author: '施耐庵', name: '水浒传', num: 3, price: 30.0, checked: false },
	{ id: 3, author: '罗贯中', name: '三国演义', num: 4, price: 24.0, checked: false },
	{ id: 4, author: '吴承恩', name: '西游记', num: 3, price: 20.0, checked: false }
]);
// 全选
let checkAll = computed({
	set(newValue) {
		books.forEach((book, index) => {
			book.checked = newValue;
		});
	},
	get() {
		// 空数组，不运行?
		if (!books.length) {
			return false;
		}
		return books.every((book, index) => book.checked);
	}
});
// 计算属性--总数
let total = computed(() => {
	return books.reduce(function (total, book, index) {
		if (book.checked) {
			return total + book.num;
		} else {
			return total
		}
	}, 0);
});
// 计算属性--总价
let cost = computed(() => {
	return books.reduce(function (total, book, index) {
		if (book.checked) {
			return total + book.num * book.price;
		} else {
			return total
		}
	}, 0);
});
// 排序
function handleSort() {
	books.sort((itemA, itemB) => {
		return (itemA.price - itemB.price) * order.value;
	})
	order.value = -order.value;
}
// 删除
function handleRemove(i) {
	books.splice(i, 1);
}
	// 数量修改：
	// function handleChange(book, data) {
	// 	console.log(data);
	// 	book.num = data;
	// }
	function aaafun(arr){
		console.log(arr)
	}
</script>

<template>
	<div class="card my-3">
		<div class="card-header">复选框的全选功能</div>
		<div class="card-body">
			<table class="table table-hover">
				<thead class="table-dark">
					<tr>
						<th>
							<input type="checkbox" v-model="checkAll" />
						</th>
						<th>#</th>
						<th>书名</th>
						<th>作者</th>
						<th @click="handleSort">单价</th>
						<th>数量</th>
						<th>操作</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="(book, index) in books" :key="book.id">
						<td>
							<input type="checkbox" v-model="book.checked" />
						</td>
						<td>{{ book.id }}</td>
						<td>{{ book.name }}</td>
						<td>{{ book.author }}</td>
						<td>{{ book.price }}</td>
						<td>
							<!-- max 前加 冒号————确保是数字类型（而不是字符串类型 -->
							<Counter v-model="book.num" :step="2" :min="3" :max="10" :key="time()"></Counter>
							<!-- <Counter :count="book.num" @change="handleChange(book,$event)"></Counter> -->
						</td>
						<td>
							<button @click="handleRemove(index)" type="button" class="btn btn-outline-secondary">
								x
							</button>
						</td>
					</tr>
				</tbody>
				<tfoot>
					<tr>
						<td colspan="7">
							总计：共<b class="text-danger p-2">{{ total }}</b>本书，
							共支付<b class="text-danger p-2">{{ cost }}</b>元
						</td>
					</tr>
				</tfoot>
			</table>
		</div>
	</div>
	<div>
	</div>
	<Counter></Counter>

	<FiveStarEvaluation v-model="WangZai"></FiveStarEvaluation>
	<chuansuokuang v-bind:data="listarr_left" v-model:value="listarr_right"></chuansuokuang>
	<ol>
		<li>
			参照element框架中的<a href="https://element.eleme.cn/#/zh-CN/component/transfer">穿梭框</a>完成组件的封装
		</li>
		<li>
			可以全选、单选，实现左右的跳换
		</li>
		<li>
			组件拥有data属性，允许传入外部数据
		</li>
		<li>
			组件拥有value属性，v-model绑定，代表右侧组件的结果，可以通过value获取到已选中的选项
		</li>
	</ol>
	{{listarr_right}}
</template>
