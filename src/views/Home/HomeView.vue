<template>
  <div class="component">
    <div class="card_conteiner">
      <Card
        :key="index"
        v-for="(pokemon, index) in pokemons"
        :title="pokemon.name"
        :url="pokemon.sprites.front_default"
        :types="pokemon.types"
        :pokemon_number="pokemon.id"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { getSpecificPokemon } from "../../services/pokemonService";
import { Pokemon } from "../../types/types";
//components
import { Card } from "../../components";

export default defineComponent({
  name: "HomeView",
  setup() {
    const pokemons = ref<Pokemon[]>();
    onMounted(async () => {
      const fetchPokemons = async () => {
        try {
          const requests = Array.from({ length: 150 }, (_, index) =>
            getSpecificPokemon(index + 1)
          );
          const responses = await Promise.all(requests);
          const pokemonArray = responses.filter((pokemon) => !!pokemon);
          pokemons.value = pokemonArray;
        } catch (error) {
          console.error("Error fetching Pokemon:", error);
          pokemons.value = undefined;
        }
      };

      fetchPokemons();
    });

    return { pokemons };
  },
  components: {
    Card,
  },
});
</script>

<style scoped>
.component {
  width: 100%;
  height: 100%;
  /* padding: 20px 2rem; */
}

.card_conteiner {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  padding-top: 10px;
  justify-content: center;
}
</style>
