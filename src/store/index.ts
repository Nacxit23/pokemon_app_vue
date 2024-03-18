import { createStore } from "vuex";

const storedData = localStorage.getItem("currentSearchData");

let initialState = {
  search: "",
  pokemonList: [],
};

if (storedData) {
  try {
    const parsedData = JSON.parse(storedData);
    initialState = {
      search: parsedData.lastSearch || "",
      pokemonList: parsedData.pokemonList || [],
    };
  } catch (error) {
    console.error("Error al analizar los datos de localStorage:", error);
  }
}

export default createStore({
  state: initialState,
  mutations: {
    setSearch(state, value) {
      const currentData = JSON.stringify({
        lastSearch: value,
        pokemonList: state.pokemonList,
      });
      localStorage.setItem("currentSearchData", currentData);
      state.search = value;
    },
    setPokemonList(state, value) {
      state.pokemonList = value;
    },
  },
});
