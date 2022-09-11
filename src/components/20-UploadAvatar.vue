<!-- 封装头像组件 -->
<template>
	<div class="container">
		<div class="d-flex align-items-center justify-content-center p-5">
			<div class="upload-box">
				<label class="border" for="upload-input">
					<img class="photo rounded" src="../assets/logo.svg" width="200" alt="">
				</label>
				<!-- 上传文件： -->
				<input @change="handleUpload" ref="uploader" class="visually-hidden" type="file" id="upload-input">
			</div>
		</div>
	</div>
</template>

<script setup>
	//ref：帮助查找对象
	import { ref } from 'vue';
	// DOM原生JS对象
	let uploader = ref(null);
	console.log(uploader.value);
	//change事件
	function handleUpload() {
		//获取file对象
		// console.dir(uploader.value.files[0]);
		let file = uploader.value.files[0];
		// formData 将form标签JS化（fromdata  MDN看看）
		let formData = new FormData();
		//追加数据：
		formData.append('file', file);
		formData.append('type', 'avatar');
		//发送ajax：
		console.log('发送ajax。。。', formData);
	}
</script>

<style>
</style>
