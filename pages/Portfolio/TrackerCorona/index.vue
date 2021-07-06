<template>
  <div class="w-full h-full">
    <h2 class="text-3xl pb-5 capitalize font-medium text-primaryColor">
      Dashboard
    </h2>

    <v-row>
      <v-col>
        <v-card rounded="md">
          <v-card-title class="primaryColor--text" primary-title>
            Peta sebaran
          </v-card-title>
        </v-card>
      </v-col>
      <v-col>
        <v-card class="pa-4">
          <v-row>
            <v-col v-for="(data, index) in dataStat" :key="index">
              <v-card rounded="lg">
                <v-card-text class="flex pt-2 pb-0 justify-center">
                  <v-icon x-large v-text="data.emoticon"></v-icon>
                </v-card-text>

                <v-card-title
                  class="capitalize text-subtitle-1 font-weight-bold px-0 primaryColor--text flex justify-center"
                  v-text="data.title"
                >
                </v-card-title>

                <v-card-subtitle
                  class="flex font-weight-medium justify-center primaryColor--text"
                  v-text="data.total"
                >
                </v-card-subtitle>
              </v-card>
            </v-col>
          </v-row>

          <v-card rounded="md" class="my-5">
            <canvas id="myChart" width="400" height="400"></canvas>
          </v-card>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import {
  Chart,
  ArcElement,
  LineElement,
  BarElement,
  PointElement,
  BarController,
  BubbleController,
  DoughnutController,
  LineController,
  PieController,
  PolarAreaController,
  RadarController,
  ScatterController,
  CategoryScale,
  LinearScale,
  LogarithmicScale,
  RadialLinearScale,
  TimeScale,
  TimeSeriesScale,
  Decimation,
  Filler,
  Legend,
  Title,
  Tooltip
} from "chart.js";

export default {
  layout: "coronalayout",

  mounted() {
    this.$axios.$get("/update/").then(result => {
      let { total } = result.update;

      this.dataStat[0].total = total.jumlah_positif;
      this.dataStat[1].total = total.jumlah_sembuh;
      this.dataStat[2].total = total.jumlah_meninggal;
    });
  },

  data() {
    return {
      jumlahPositif: "",
      jumlahMeninggal: "",
      jumlahSembuh: "",
      dataStat: [
        {
          title: "total positif",
          emoticon: "mdi-emoticon-sad-outline",
          total: ""
        },
        {
          title: "total sembuh",
          emoticon: "mdi-emoticon-happy-outline",
          total: ""
        },
        {
          title: "total meninggal",
          emoticon: "mdi-emoticon-cry-outline",
          total: ""
        }
      ]
    };
  }
};
</script>

<style></style>
