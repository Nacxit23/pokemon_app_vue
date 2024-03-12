<template lang="">
  <div class="card_component">
    <span class="title">{{ toCamelCaseTitle }}</span>
    <span class="pokemon_number">#{{pokemon_number}}</span>
    <img :src="url" alt="pokemon_img" />
    <div class="types_conteiner">
      <div
        :key="index"
        v-for="(type, index) in types"
        class="types"
        :style="{ background: getTypeColor(type.type.name) }"
      >{{type.type.name}}</div>
    </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { Type } from "../../types/types";

export interface Props {
  click?: () => void;
  description?: string;
  title: string;
  types: Array<Type>;
  url: string;
  pokemon_number:string
}

export default defineComponent({
  props: ["click", "description", "pokemon_number", "title", "types", "url"],
  name: "CardComponent",
  setup(props: Props) {
    const getTypeColor = ref<any>();
    getTypeColor.value = (type: string): string => {
      switch (type) {
        case "normal":
          return "#75515B";
        case "bug":
          return "#3B9950";
        case "dark":
          return "#050706";
        case "dragon":
          return "#62C9DB";
        case "electric":
          return "#E2E42B";
        case "fairy":
          return "#CE1C63";
        case "fighting":
          return "#EF6138";
        case "fire":
          return "#FE4C5A";
        case "flying":
          return "#93B2C7";
        case "ghost":
          return "#906790";
        case "grass":
          return "#137C3B";
        case "ground":
          return "#6E491F";
        case "ice":
          return "#88D1F5";
        case "poison":
          return "#9B69D9";
        case "psychic":
          return "#EE2592";
        case "rock":
          return "#8B3E22";
        case "steel":
          return "#42BE94";
        case "water":
          return "#1851E2";

        default:
          return "#75515B";
      }
    };

    const toCamelCaseTitle = ref<string>();
    toCamelCaseTitle.value =
      props.title.charAt(0).toUpperCase() + props.title.slice(1);
    return { toCamelCaseTitle, getTypeColor };
  },
});
</script>
<style scoped>
.title {
  font-size: 24px;
  font-weight: 700;
}

.image {
  border-radius: 20%;
  height: 100%;
  width: 100%;
}

.pokemon_number {
  color: #969696;
  font-size: 20px;
  font-weight: 700;
}

.card_component {
  align-items: center;
  border-radius: 20px;
  border: solid 2px #5d5d5d;
  display: flex;
  flex-direction: column;
  height: auto;
  margin-left: 10px;
  padding: 8px;
  width: 10rem;
  margin-bottom: 10px;
  font-family: "Exo", sans-serif;
}
.types_conteiner {
  display: flex;
  justify-content: center;
  flex-direction: row;
  gap: 4px;
}

.types {
  align-items: center;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  flex-direction: row;
  text-transform: uppercase;
  padding: 2px 10px;
  color: #ffffff;
}

.card_component:hover {
  background: #5d5d5d;
}
</style>
