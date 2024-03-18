<template>
  <div class="home_component" v-if="!isLoading">
    <SearchInfo :lastSearch="searchData" />
    <div v-if="pokemons.length !== 0" class="card_conteiner">
      <Card
        :key="index"
        v-for="(pokemon, index) in pokemons"
        :title="pokemon.name"
        :url="pokemon.sprites.front_default"
        :types="pokemon.types"
        :pokemon_number="pokemon.id"
      />
      <Button
        :title="'Cargar mas pokemones'"
        :onClick="callMorePokemon"
        :style="stylePokemon"
        v-if="pokemons.length > 1"
      />
    </div>
    <div class="is_empy_msg" v-if="pokemons.length === 0 && !isLoading">
      <img
        class="img-size"
        src="https://aws-nac-dev-bucket.s3.us-east-2.amazonaws.com/Image/sticker-png-pikachu-i-choose-you-sad-icon-2.png"
        alt="img"
      />
      <h1>No hay Pokemon disponibles</h1>
    </div>
  </div>
  <div class="home_component" v-else>
    <Icon />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref, watch } from "vue";
import {
  getPokemonWithName,
  getSpecificPokemon,
} from "../../services/pokemonService";
import { Pokemon } from "../../types/types";
//componenButton, ts
import { Card, Icon, SearchInfo, Button } from "../../components";
import { useStore } from "vuex";

export default defineComponent({
  name: "HomeView",
  setup() {
    const pokemons = ref<Pokemon[]>([]);
    const isLoading = ref<boolean>(false);
    const stylePokemon = {
      backgroundColor: "#00AEEF",
      padding: "10px 20px",
      border: "none",
      borderRadius: "5px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      cursor: "pointer",
      transition: "background-color 0.3s",
      textTransform: "uppercase",
      fontWeight: "bold",
      letterSpacing: "1px",
      textDecoration: "none",
      textAlign: "center",
      margin: "10px",
      fontFamily: '"Exo", sans-serif',
    };
    const callMorePokemon = () => {
      const fetchPokemons = async () => {
        try {
          isLoading.value = true;
          const requests = Array.from({ length: pokemons.value.length + 20}, (_, index) =>
            getSpecificPokemon(index + 1)
          );
          const responses = await Promise.all(requests);
          const pokemonArray = responses.filter((pokemon) => !!pokemon);
          pokemons.value = pokemonArray;
          isLoading.value = false;
        } catch (error) {
          console.error("Error fetching Pokemon:", error);
          pokemons.value = [];
        }
      };
      fetchPokemons();    };
    onMounted(async () => {
      const fetchPokemons = async () => {
        try {
          isLoading.value = true;
          const requests = Array.from({ length: 20}, (_, index) =>
            getSpecificPokemon(index + 1)
          );
          const responses = await Promise.all(requests);
          const pokemonArray = responses.filter((pokemon) => !!pokemon);
          pokemons.value = pokemonArray;
          isLoading.value = false;
        } catch (error) {
          console.error("Error fetching Pokemon:", error);
          pokemons.value = [];
        }
      };
      fetchPokemons();
    });
    //vuex
    const store = useStore();
    const searchData = computed(() => store.state.search);
    watch(searchData, async () => {
      try {
        if (searchData.value.length !== 0) {
          isLoading.value = true;
          const request = await getPokemonWithName(
            searchData.value.toLowerCase()
          );
          isLoading.value = false;
          pokemons.value?.splice(0, pokemons.value.length);
          pokemons.value?.push(request);
        } else {
          isLoading.value = true;
          const requests = Array.from({ length: 20}, (_, index) =>
            getSpecificPokemon(index + 1)
          );
          const responses = await Promise.all(requests);
          const pokemonArray = responses.filter((pokemon) => !!pokemon);
          pokemons.value = pokemonArray;
          isLoading.value = false;
        }
      } catch (error) {
        isLoading.value = false;
        return;
      }
    });
    return { isLoading, pokemons, searchData, stylePokemon,callMorePokemon };
  },
  components: {
    Card,
    Icon,
    SearchInfo,
    Button,
  },
});
</script>

<style scoped>
.home_component {
  width: 100%;
  height: 100%;
}

.card_conteiner {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  padding-top: 10px;
  justify-content: center;
}
.is_empy_msg {
  border-radius: 20px;
  box-shadow: 10px;
  display: flex;
  flex-direction: column;
  height: 250px;
  width: auto;
  align-items: center;
  justify-content: center;
  font-family: "Exo", sans-serif;
}
.img-size {
  width: 33rem;
  height: 13rem;
}
</style>
