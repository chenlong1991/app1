<template>
  <!-- 使用动态样式绑定高度，减去传入的 topOffset 值 -->
  <div
    :style="{ height: `calc(100vh - ${topOffset}px)`, marginTop: `${topOffset}px` }"
    class="custom-scrollbar"
  >
    <!-- 插槽，用于在组件中插入任意内容 -->
    <slot></slot>
  </div>
</template>

<script setup>
/* 定义组件的props */
const { topOffset } = defineProps({
  topOffset: {
    type: Number, // topOffset的类型是数字
    required: true, // 该属性是必需的
    default: 32 // 默认值为32
  }
})
</script>

<style scoped>
/* 自定义滚动条容器样式 */
.custom-scrollbar {
  overflow-y: auto; /* 使内容区域可垂直滚动 */
  position: relative; /* 确保伪元素定位正确 */
  width: 100%; /* 确保滚动条水平居中 */
}

/* 自定义整个滚动条的样式 */
.custom-scrollbar::-webkit-scrollbar {
  width: 8px; /* 滚动条的宽度 */
  height: 5px; /* 滚动条的高度 */
}

/* 自定义滚动条滑块的样式 */
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #888; /* 滑块的背景颜色 */
  border-radius: 6px; /* 滑块的圆角 */
}

/* 自定义滚动条轨道的样式 */
.custom-scrollbar::-webkit-scrollbar-track {
  background: #ffffff; /* 轨道的背景颜色 */
  border-radius: 6px; /* 轨道的圆角 */
}

/* 隐藏滚动条按钮 */
.custom-scrollbar::-webkit-scrollbar-button {
  display: none; /* 不显示滚动条按钮 */
}

/* 自定义滚动条交汇处的样式 */
.custom-scrollbar::-webkit-scrollbar-corner {
  background: #f1f1f1; /* 交汇处的背景颜色 */
}
</style>
