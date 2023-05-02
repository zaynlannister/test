<template>
  <div>
    <my-sidebar/>
    <my-header/>
    <my-info/>
<!--    <my-test/>-->
    <router-view></router-view>
  </div>
</template>

<script setup>
import MyHeader from "@/components/MyHeader.vue";
import MyTest from "@/components/MyTest.vue";
import MySidebar from "@/components/MySidebar.vue";
import MyInfo from "@/components/MyInfo.vue";
</script>

<style lang="scss" scoped>

</style>
