import { defineComponent } from 'vue';
<template lang="">
  <input
    class="search-input"
    type="text"
    :value="value"
    :name="name"
    :placeholder="placeholder"
    @input="$emit('update:value', $event.target.value)"
  />
</template>
<script lang="ts">
import { defineComponent } from "vue";
// import { conteiner } from "@/utils/global-theme";

export default defineComponent({
  name: "InputVue",
  // props: {
  //   name: {type:String, required: true},
  //   placeholder:  {type:String, required: true},
  // },
  props:["value","name","placeholder"],
});
</script>
<style scoped>
.search-input {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
  width: 200px;
}

.search-input:focus {
  border-color: #007bff;
  /* Puedes cambiar el color según tus preferencias */
}
</style>
