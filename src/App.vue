<template>
  <div>
    <Header/>
    <router-view/>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import {Header } from "../src/components";

export default defineComponent({
  components:{
    Header
  }
})

</script>

<style scoped>
</style>