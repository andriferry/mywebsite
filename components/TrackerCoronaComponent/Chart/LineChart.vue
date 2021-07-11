<template>
  <div class="pa-5">
    <v-card-title class="text-subtitle-1 font-weight-bold primaryColor--text">
      Statistik Covid 19 Selama 7 Hari
    </v-card-title>

    <v-card-text>
      <canvas id="lineChart" ref="lineChart" class="w-52 h-60 block"></canvas>
    </v-card-text>
  </div>
</template>

<script>
export default {
  mounted() {
    const data = {
      labels: "Firtsh",
      datasets: [
        {
          label: "My First Dataset",
          data: [65, 59, 80, 81, 56, 55, 40],
          fill: false,
          borderColor: "rgb(75, 192, 192)",
          tension: 0.4
        }
      ]
    };

    this.$chart(this.$refs.lineChart, "line", data);
  }
};
</script>

<style></style>
