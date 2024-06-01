<template>
  <v-layout style="height: 32px">
    <v-system-bar window>
      <v-icon class="me-2" icon="mdi-message"></v-icon>

      <span>10 unread messages</span>

      <v-spacer></v-spacer>

      <v-btn icon="mdi-minus" variant="text"></v-btn>

      <v-btn class="ms-2" icon="mdi-checkbox-blank-outline" variant="text"></v-btn>

      <v-btn class="ms-2" icon="mdi-close" variant="text"></v-btn>
    </v-system-bar>
  </v-layout>
  <Scrollbar>
    <v-btn prepend-icon="$vuetify" append-icon="$vuetify">
      Button
    </v-btn>
    <div class="home">home</div>
</Scrollbar>
</template>
<script setup>

</script scoped>
<style>
/* 设置内容高度和宽度 */
.home {
  height: 1000px;
  width: 100px;
}
</style>
