<template>
  <div class="pa-5">
    <canvas id="myChart" height="270px" width="270"></canvas>
  </div>
</template>

<script>
export default {
  props: ["province", "dataCases"],

  mounted() {
    let options = {
      layout: {
        paddding: 80
      },
      responsive: true,
      plugins: {
        legend: {
          position: "bottom",
          labels: {
            padding: 20,
            pointStyle: "circle",
            usePointStyle: true
          }
        }
      },
      scales: {
        r: {
          ticks: {
            display: false
          }
        }
      }
    };

    let data = {
      labels: this.province,
      datasets: [
        {
          label: "Laki Laki",
          data: this.dataCases,
          borderWidth: 2,
          borderRadius: 5,
          backgroundColor: ["rgba(255,0,23,0.42)"]
        }
      ]
    };
    this.$chart(document.getElementById("myChart"), "polarArea", data, options);

    console.log(data.labels);
  }
};
</script>

<style></style>
