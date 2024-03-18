<template>
  <div class="spinner-container">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20em"
      height="20em"
      viewBox="0 0 48 48"
      class="spinner"
    >
      <g
        fill="none"
        stroke="#000"
        stroke-linejoin="round"
        stroke-miterlimit="2"
        stroke-width="4"
      >
        <path
          fill="#DC0B2D"
          d="M44 24H30C30 20.69 27.31 18 24 18C20.69 18 18 20.69 18 24H4C4 12.95 12.95 4 24 4C35.05 4 44 12.95 44 24Z"
        />
        <path
          stroke-linecap="round"
          d="M18 24H4C4 35.05 12.95 44 24 44C35.05 44 44 35.05 44 24H30"
        />
        <path
          d="M24 30C27.3137 30 30 27.3137 30 24C30 20.6863 27.3137 18 24 18C20.6863 18 18 20.6863 18 24C18 27.3137 20.6863 30 24 30Z"
        />
      </g>
    </svg>
  </div>
</template>

<script lang="ts">
export default {
  name: "IconParkBaokemeng",
};
</script>
<style scoped>
.spinner-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.spinner {
  animation: spin 1s linear infinite; /* Rotación infinita */
}

@keyframes spin {
  0% {
    transform: rotate(0deg); /* Angulo inicial de rotación */
  }
  100% {
    transform: rotate(360deg); /* Angulo final de rotación */
  }
}
</style>
