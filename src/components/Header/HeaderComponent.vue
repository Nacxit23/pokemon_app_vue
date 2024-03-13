<template>
  <div class="header_conteiner">
    <!-- <div class="navbar">
      <router-link class to="/">Pokemons</router-link>
    </div> -->
    <div class="navbar">
      <img
        class="pokemon_logo"
        :src="require('../../assets/pokemon-logo.svg')"
        alt="pokemon_logo"
      />
      <div class="log_button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="3em"
          height="3em"
          viewBox="0 0 48 48"
        >
          <defs>
            <mask id="IconifyId18dec5925379956011">
              <g
                fill="none"
                stroke="#ffffff"
                stroke-linejoin="round"
                stroke-miterlimit="2"
                stroke-width="4"
              >
                <path
                  fill="#555"
                  d="M44 24H30c0-3.31-2.69-6-6-6s-6 2.69-6 6H4C4 12.95 12.95 4 24 4s20 8.95 20 20Z"
                />
                <path
                  stroke-linecap="round"
                  d="M18 24H4c0 11.05 8.95 20 20 20s20-8.95 20-20H30"
                />
                <path d="M24 30a6 6 0 1 0 0-12a6 6 0 0 0 0 12Z" />
              </g>
            </mask>
          </defs>
          <path
            fill="currentColor"
            d="M0 0h48v48H0z"
            mask="url(#IconifyId18dec5925379956011)"
          />
        </svg>
        <Input
          :name="'pokemon_search'"
          :placeholder="'Buscar'"
          v-model:value="searchData"
        />
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent,ref } from "vue";
//component
import Input from "../input/input.vue";

export default defineComponent({
  name: "HeaderComponent",
  components: {
    Input,
  },
  setup() {
    const searchData = ref<string>('')
    console.log("🚀 ~ setup ~ searchData:", searchData)

    return {
      searchData,
    };
  },
});
</script>
<style scoped>
.header_conteiner {
  height: 4rem;
  padding: 10px 15px;
  width: 100%;
  display: flex;
  justify-content: center;
  background: #dc0b2d;
}

.navbar {
  display: flex;
  justify-content: space-between;
  gap: 10;
  align-items: center;
  width: 40%;
  height: 100%;
}
.log_button {
  display: flex;
  align-items: center;
}
.pokemon_logo {
  height: 4rem;
}
</style>
