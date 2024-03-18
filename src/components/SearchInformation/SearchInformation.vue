<template>
  <div class="conteiner" v-show="lastSearch">
    <span class="info">POKEMON</span>
    <svg
          xmlns="http://www.w3.org/2000/svg"
          width="2em"
          height="2em"
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
    <span class="info">/</span>
    <span class="info">{{ lastSearch }}</span>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "searchInformation",
  props: {
    lastSearch: {
      type: String,
      required: true,
    },
  },
});
</script>
<style scoped>
.conteiner {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 5px;
  padding-left: 15px;
  padding-top: 10px;
  text-transform: capitalize;
}
.info {
  font-size: larger;
  font-weight: 700;
  font-family: "Exo", sans-serif;
}
</style>
