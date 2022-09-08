<template>
	<div class="counter-box input-group">
		<button @click="handledown" class="btn btn-outline-secondary" type="button">-</button>
		<input v-model.number="bbb" type="number" class="form-control text-center">
		<button @click="handleUp" class="btn btn-outline-secondary" type="button">+</button>
	</div>
</template>

<script setup>

import {watch,computed } from 'vue';
	//组件属性props

	let props = defineProps({
		modelValue: {
			type: Number,
			default: 1, //默认
			required: true, //必填
		},

		//允许最小值：
		min: {
			type: Number,
			default: 1,
		},
		//允许最大值：
		max: {
			type: Number,
			default: Infinity,
		},
		//步长：
		step: {
			type: Number,
			default: 1,
		}
	});
	let bbb = computed({
		get(){
return props.modelValue
		},
		set(fff){
			if (fff >= props.max) {
				emit('update:modelValue', props.max);
				return;
			}
			//输入值小于最小值：
			if (fff <= props.min) {
				emit('updata:modelValue', props.min);
				return;

			}
			//正确输入情况：
			emit('update:modelValue', fff);
		}
	})
	//组件events
	let emit = defineEmits(["update:modelValue"]);
	console.log(props.modelValue);
	//减少：
	function handledown() {
		//下一步数值：
		let next = props.modelValue - props.step;
		//低于最小值
		if (next < props.min) {
			emit('update:modelValue', props.min);
		}
		//为低于最小值：
		if (next >= props.min) {
			emit('update:modelValue', props.modelValue - props.step);
		}
		// if (props.count > 1) {
		// 	emit('change', props.count - 1);
		// } else {
		// 	return;
		// }
	}
	//增加：
	function handleUp() {
		//下一步数值：
		let next = props.modelValue + props.step;
		//超出最大值：
		if (next > props.max) {
			emit('update:modelValue', props.max);
		}
		//未达到Max值
		if (next <= props.max) {
			emit('update:modelValue', props.modelValue + props.step);
		}
	}
	//输入数值（使用计算属性）：
	// let value = computed({
	// 	get() {
	// 		return props.modelValue;
	// 	},
	// 	set(newValue, oldValue) {
	// 			//输入值大于最大值：
	// 		if (newValue >= props.max) {
	// 			emit('update:modelValue', props.max);
	// 			return;
	// 		}
	// 		//输入值小于最小值：
	// 		if (newValue <= props.min) {
	// 			emit('updata:modelValue', props.min);
	// 			return;
	// 		}
	// 		//正确输入情况：
	// 		emit('update:modelValue', newValue);
	// 	}
	// })
	// let aaa = null
	// watch(()=>bbb,()=>{
	// 	clearTimeout(aaa)
	// 	aaa=setTimeout(()=>{
	// 		if (bbb >= props.max) {
	// 			emit('update:modelValue', props.max);
	// 			return;
	// 		}
	// 		//输入值小于最小值：
	// 		if (bbb <= props.min) {
	// 			emit('updata:modelValue', props.min);
	// 			return;
	// 		}
	// 		//正确输入情况：
	// 		emit('update:modelValue', bbb);
	// 	},1000)
		
	// })
</script>

<style lang="less">
	.counter-box {
		width: 150px;

		button {
			width: 40px;
		}
	}
</style>
