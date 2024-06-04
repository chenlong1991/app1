<template>
  <v-layout column style="height: 100vh">
    <!-- 系统栏，固定在顶部 -->
    <v-system-bar window style="-webkit-app-region: drag" theme="dark">
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
    <v-navigation-drawer floating permanent theme="dark" :width="200">
      <v-list density="compact" nav>
        <v-list-item
          prepend-icon="mdi-view-dashboard"
          title="翻译设置"
          value="111"
          to="/setting/translation"
        ></v-list-item>
        <v-list-item prepend-icon="mdi-forum" title="文本识别设置" value="about"></v-list-item>
      </v-list>
    </v-navigation-drawer>
    <!-- 滚动内容区域 -->
    <Scrollbar :top-offset="32">
      <v-main class="pt-0 d-flex justify-center align-center" theme="dark">
        <router-view></router-view>
      </v-main>
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

<style></style>
