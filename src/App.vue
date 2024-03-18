<template>
  <div class="high_app_conteiner">
    <Header />
    <router-view />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { Header } from "../src/components";

export default defineComponent({
  components: {
    Header,
  },
});
</script>
<style >
.high_app_conteiner {
  width: 100vw; 
  height: 100vh;
  display: flex;
  flex-direction: column; 
}

body {
  margin: 0;
}
</style>
