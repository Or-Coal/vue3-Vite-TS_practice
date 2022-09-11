<template>
	<div class="counter-box input-group">
		<button @click="handleDown" class="btn btn-outline-secondary" type="button">-</button>
		<input v-model.number="value" type="number" class="form-control text-center">
		<button @click="handleUp" class="btn btn-outline-secondary" type="button">
			+
		</button>
	</div>
</template>

<script setup>
import { computed } from 'vue';
// 组件props
let props = defineProps({
	modelValue: {
		type: Number,
		default: 1, //默认值
		required: true, //必填
	},
	min: {
		type: Number,
		default: 1,
	},
	max: {
		type: Number,
		default: Infinity,
	},
	step: {
		type: Number,
		default: 1,
	}
});
// 组件events
let emit = defineEmits(["update:modelValue"]);
// 减少
function handleDown() {
	// 下一步的数值
	let next = props.modelValue - props.step;
	// 超出min值
	if (next <= props.min) {
		emit('update:modelValue', props.min);
	}
	// 未达到min值
	if (next > props.min) {
		emit('update:modelValue', next);
	}
}
// 增加
function handleUp() {
	// 下一步的数值
	let next = props.modelValue + props.step;
	// 超出max值
	if (next >= props.max) {
		emit('update:modelValue', props.max);
	}
	// 未达到max值
	if (next < props.max) {
		emit('update:modelValue', next);
	}
}
// 计算属性--输入操作
let value = computed({
	get() {
		return props.modelValue;
	},
	set(newValue, oldValue) {
		// 是否超出max最大值
		if (newValue >= props.max) {
			emit('update:modelValue', props.max);
			return;
		}
		// 是否超出min最小值
		if (newValue <= props.min) {
			emit('update:modelValue', props.min);
			return;
		}
		// 符合范围
		emit('update:modelValue', newValue);
	}
});
</script>

<style>
.counter-box {
	width: 150px;
}
</style>
