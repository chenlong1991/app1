<template>
  <v-layout column style="height: 100vh">
    <!-- 系统栏，固定在顶部 -->
    <v-system-bar window style="-webkit-app-region: drag">
      <span>设置</span>

      <v-spacer></v-spacer>

      <v-btn
        icon="mdi-minus"
        variant="text"
        size="x-small"
        style="-webkit-app-region: no-drag"
        @click="minimize"
      ></v-btn>

      <v-btn
        icon="mdi-checkbox-blank-outline"
        variant="text"
        size="x-small"
        style="-webkit-app-region: no-drag"
        @click="maximizeWindow"
      ></v-btn>

      <v-btn
        class="ms-2"
        icon="mdi-close"
        variant="text"
        size="x-small"
        style="-webkit-app-region: no-drag"
        @click="close"
      ></v-btn>
    </v-system-bar>
    <Scrollbar :top-offset="32">
      <div class="aa">
        <p>哈哈哈哈</p>
        <p>呵呵呵呵呵呵呵</p>
        <p>哈哈哈哈</p>
        <p>呵呵呵呵呵呵呵</p>
        <p>哈哈哈哈</p>
        <p>呵呵呵呵呵呵呵</p>
        <p>哈哈哈哈</p>
        <p>呵呵呵呵呵呵呵</p>
        <p>哈哈哈哈</p>
        <p>呵呵呵呵呵呵呵</p>
        <p>哈哈哈哈</p>
        <p>呵呵呵呵呵呵呵</p>
        <p>哈哈哈哈</p>
        <p>呵呵呵呵呵呵呵</p>
        <p>哈哈哈哈</p>
        <p>呵呵呵呵呵呵呵</p>
        <p>哈哈哈哈</p>
        <p>呵呵呵呵呵呵呵</p>
        <p>哈哈哈哈</p>
        <p>呵呵呵呵呵呵呵</p>
        <p>哈哈哈哈</p>
        <p>呵呵呵呵呵呵呵</p>
      </div>
    </Scrollbar>
  </v-layout>
</template>
<script setup>
const minimize = () => {
  window.electronAPI.minimizeWindow()
}

const maximizeWindow = () => {
  window.electronAPI.maximizeWindow()
}

const close = () => {
  window.electronAPI.closeWindow()
}
</script>
<style lang="scss" scoped>
.aa {
  width: 100%;
  height: 1400px;
}
</style>
