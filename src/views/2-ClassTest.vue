<template>
    <div>
        <div class="box1 relative">
            <div class="bg" :class="{ bg_show: isMove }"></div>
            <div @click="isMove = !isMove" class="btn1" :class="{ intermove: isMove }"></div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isMove: false,
        }
    }
}
</script>

<style>
.box1 {
    border: 1px solid black;
    width: 50px;
    height: 22px;
    border-radius: 50px;
    background-color: white;
    position: relative;
    padding: 2px;
}

.bg {
    position: absolute;
    top: 0;
    left: 0;
    border: 0 solid;
    border-radius: 50px;
    width: 0%;
    height: 100%;
    transition: all 1s;
}

.bg.bg_show {
    background-color: aquamarine;
    width: 100%;
    height: 100%;
}

.btn1 {
    position: absolute;
    top: 0;
    left: 1px;
    z-index: 3;
    border: 1px solid black;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    transition: all 0.5s;

}

.btn1.intermove {
    transform: translateX(25px);
    background-color: white;
    z-index: 3;
}
</style>
