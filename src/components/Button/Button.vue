<template lang="">
  <button :style="style" @click="onClick">
    {{ title }}
  </button>
</template>
<script lang="ts">
import { defineComponent } from "vue";

interface Props {
  onClick: () => void;
  title: string;
  style: { [key: string]: string };
}

export default defineComponent({
  name: "ButtonComponent",
  props: ["onClick", "title", "style"],
  setup(props: Props) {
    return { props };
  },
});
</script>
<style lang=""></style>
