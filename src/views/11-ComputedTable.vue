<template>
  <div class="card">
    <div class="card-header">全选框推导——set\get</div>
    <div class="card-body">
      <table class="table">
        <thead>
          <tr>
            <th>
              <input
                v-model="allChecked"
                type="checkbox"
                class="from-check-input"
              />
            </th>
            <th scope="col">#</th>
            <th scope="col">书名</th>
            <th scope="col">作者</th>
            <th scope="col" @click="handleSort">单价</th>
            <th scope="col">数量</th>
            <th scope="col">操作</th>
          </tr>
        </thead>
        <tfoot>
          <tr>
            <td colspan="6">
              总计<span class="text-danger">{{ total_nums }}</span
              >本书， 总价格为<b class="text-danger">{{ total_price }}</b
              >元
            </td>
          </tr>
        </tfoot>
        <tbody>
          <tr v-for="(item, index) in books" :key="item.id">
            <td>
              <input
                v-model="item.checked"
                type="checkbox"
                class="from-check-input"
              />
            </td>
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.author }}</td>
            <td>{{ item.price }}</td>
            <td>
              <button
                @click="handledown(item)"
                type="button"
                class="btn btn-outline-secondary"
              >
                -
              </button>
              <button type="button" class="btn btn-secondary">
                {{ item.num }}
              </button>
              <button
                @click="handleup(item)"
                type="button"
                class="btn btn-outline-secondary"
              >
                +
              </button>
            </td>
            <td>
              <button
                @click="handleRemove(index)"
                type="button"
                class="btn btn-outline-secondary"
              >
                X
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive, computed } from "vue";
const order = ref(-1);
const books = reactive([
  {
    id: 1,
    author: "曹雪芹",
    name: "红楼梦",
    num: 1,
    price: 32.0,
    checked: false,
  },
  {
    id: 2,
    author: "施耐庵",
    name: "水浒传",
    num: 3,
    price: 30.0,
    checked: true,
  },
  {
    id: 3,
    author: "罗贯中",
    name: "三国演义",
    num: 2,
    price: 24.0,
    checked: false,
  },
  {
    id: 4,
    author: "吴承恩",
    name: "西游记",
    num: 2,
    price: 20.0,
    checked: false,
  },
]);

const allChecked = computed({
  get() {
    if (books.length === 0) {
      return false;
    }
    return books.every((book) => book.checked === true);
  },
  set(newVlaue) {
    books.forEach((book) => {
      book.checked = newVlaue;
    });
  },
});
const total_nums = computed(() => {
  return books.reduce(
    (total, book) => total + (book.checked ? book.num : 0),
    0
  );
});
const total_price = computed(() => {
  let total = 0;
  books.forEach((item) => {
    if (item.checked) {
      total += item.price * item.num;
    }
  });
  return total;
});
function handleSort() {
  order.value = -order.value;
  books.sort((itemA, itemB) => {
    return (itemA.price - itemB.price) * order.value;
  });
}

function handleRemove(i) {
  books.splice(i, 1);
}
function handleup(book) {
  book.num++;
}
function handledown(book) {
  if (book.num > 1) {
    book.num--;
  }
}
</script>
