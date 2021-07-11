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
    let options = {
      layout: {
        padding: 10
      },
      responsive: true,
      plugins: {
        legend: {
          display: false
        }
      },
      scales: {
        xAxis: {
          grid: {
            display: false
          }
        }
      }
    };

    const data = {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      datasets: [
        {
          label: "",
          data: [54, 63, 60, 65, 60, 68, 60],
          fill: false,
          borderColor: "rgb(255,0,23)",
          tension: 0.4,
          xAxisID: "xAxis",
          pointRadius: 6,
          pointBorderWidth: 2,
          pointHoverRadius: 8,
          pointBackgroundColor: "white",
          pointHoverBackgroundColor: "red",
          pointHoverBorderColor: "white"
        }
      ]
    };

    this.$chart(this.$refs.lineChart, "line", data, options);
  }
};
</script>

<style></style>
