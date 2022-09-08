<script setup>
	import FiveStarEvaluation from '@/views/20-五星评价.vue'
	import Counter from '@/components/Counter.vue';
	import { ref, computed, reactive } from 'vue';
function time(){
	return new Date()
} 
let WangZai = ref(null)
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
		return books.reduce(function(total, book, index) {
			if (book.checked) {
				return total + book.num;
			} else {
				return total
			}
		}, 0);
	});
	// 计算属性--总价
	let cost = computed(() => {
		return books.reduce(function(total, book, index) {
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
	    <FiveStarEvaluation v-model="WangZai"></FiveStarEvaluation>
		<Counter></Counter>
	</div>

</template>
