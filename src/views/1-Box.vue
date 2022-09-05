<template>
    <div class="card my-3">
        <div class="card-header">事件传参</div>
        <div class="card-body">
            <div class="d-flex justify-content-center align-items-center">
                <div :style="{ borderWidth: width, borderRadius: radius }" class="box"></div>
            </div>
            <div class="p-5">
                <div class="card mb-3">
                    <h5 class="card-header">调整参数</h5>
                    <div class="card-body">
                        <div class="row mb-3">
                            <label class="col-sm-2 col-form-label">边框：</label>
                            <div class="col-sm-10">
                                <button @click="handleBorder('1px')" class="btn btn-outline-primary me-3">1px</button>
                                <button @click="handleBorder('4px')" class="btn btn-outline-primary me-3">4px</button>
                                <button @click="handleBorder('8px')" class="btn btn-outline-primary me-3">8px</button>
                                <button @click="handleBorder('16px')" class="btn btn-outline-primary">16px</button>
                            </div>
                        </div>
                        <div class="row">
                            <label class="col-sm-2 col-form-label">圆角：</label>
                            <div class="col-sm-10">
                                <button @click="handleRadius('4px')" class="btn btn-outline-primary me-3">4px</button>
                                <button @click="handleRadius('12px')" class="btn btn-outline-primary me-3">12px</button>
                                <button @click="handleRadius('50px')" class="btn btn-outline-primary me-3">50px</button>
                                <button @click="handleRadius('50%')" class="btn btn-outline-primary">50%</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
  <script>
export default {
    data() {
        return {
            width: '1px',
            radius: '0px',
        }
    },
    methods: {
        handleRadius(r) {
            this.radius = r;
        },
        handleBorder(w) {
            this.width = w;
        }
    }
}
</script>
  
  <style>
  .box {
      width: 200px;
      height: 200px;
      border: 2px solid #000;
      transition: all 0.5s;
      background-color: orange;
  }
  </style>
  