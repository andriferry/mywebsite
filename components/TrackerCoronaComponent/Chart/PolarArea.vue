<template>
  <div class="pa-5">
    <canvas id="myChart" height="270px" width="270"></canvas>
  </div>
</template>

<script>
export default {
  data() {
    return {
      province: [],
      dataCases: []
    };
  },

  async fetch() {
    await this.$axios
      .$get("/location/")
      .then(result => {
        for (let i = 0; i < 5; i++) {
          this.province.push(result.list_data[i].key);
          this.dataCases.push(result.list_data[i].jumlah_kasus);
        }
      })
      .catch(err => {
        console.log(err);
      });
  },

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
  }
};
</script>

<style></style>
