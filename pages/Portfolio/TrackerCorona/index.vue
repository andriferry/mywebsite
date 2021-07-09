<template>
  <div class="w-full h-full">
    <h2 class="text-3xl pb-5 capitalize font-medium text-primaryColor">
      Dashboard
    </h2>

    <v-row>
      <v-col>
        <v-card class="pa-4 pt-0" color="transparent" elevation="0">
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
                >
                  {{ data.total.toLocaleString("id-ID") }}
                </v-card-subtitle>
              </v-card>
            </v-col>
          </v-row>

          <v-card rounded="lg" class="pa-2 my-5">
            <v-card-title
              class="capitalize font-weight-normal primayrColor--text text-h6"
              >Data total covid 19 di beberapa provinsi di
              indonesia</v-card-title
            >
            <v-card-subtitle class="pa-10">
              <TrackerCoronaComponentChartPolarArea
                :resultDataLocation="locationResult"
              />
            </v-card-subtitle>
          </v-card>
        </v-card>
      </v-col>
      <v-col>
        <v-card min-height="95%" rounded="lg" max-height="95%">
          <v-card-text>
            <TrackerCoronaComponentNews :news="newsResult" />
          </v-card-text>

          <v-card-actions class="px-6">
            <NuxtLink
              to="/Portfolio/TrackerCorona/allNews"
              class="capitalize font-weight-bold blue--text pa-1"
            >
              <v-hover v-slot="{ hover }" open-delay="20" close-delay="50">
                <v-btn
                  text
                  class="text-xl tracking-widest"
                  :class="hover ? 'red white--text' : false"
                >
                  All news
                  <v-icon :color="hover ? 'white' : 'orange darken-4'" right>
                    mdi-open-in-new
                  </v-icon>
                </v-btn>
              </v-hover>
            </NuxtLink>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col cols="4">
        <v-card rounded="lg" class="">
          <TrackerCoronaComponentChartLineChart />
        </v-card>
      </v-col>
      <v-col cols="4">
        <!-- <v-card class="">Data Penambahan: Ambil bagian update.penambahan</v-card> -->
        <v-card rounded="lg">
          <TrackerCoronaComponentAddedCases />
        </v-card>
      </v-col>
      <v-col cols="4">
        <v-card class="" rounded="lg">
          <TrackerCoronaComponentDataVaccine :vaccine="targetVaccine" />
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    function vaccineTarget() {
      return $axios.$get("/vaksinasi/");
    }
    function getTotalCorona() {
      return $axios.$get("/update/");
    }

    function getNews() {
      return $axios.$get("/news/", {
        headers: {
          Authorization: "81b0c3b7898142288a8aecdf843cbd48"
        },
        params: {
          q: "Corona",
          language: "id"
        }
      });
    }

    function polarAreaLocation() {
      return $axios.$get("/location/");
    }

    const [pasien, news, location, vaccine] = await Promise.all([
      getTotalCorona(),
      getNews(),
      polarAreaLocation(),
      vaccineTarget()
    ]);

    return {
      totalPasien: pasien.update.total,
      newsResult: news.articles,
      locationResult: location.list_data,
      targetVaccine: vaccine.monitoring
    };
  },

  layout: "coronalayout",

  mounted() {
    this.dataStat[0].total = this.totalPasien.jumlah_positif;
    this.dataStat[1].total = this.totalPasien.jumlah_sembuh;
    this.dataStat[2].total = this.totalPasien.jumlah_meninggal;
  },

  data() {
    return {
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
      ],
      desserts: [
        {
          name: "Frozen Yogurt",
          calories: 159
        },
        {
          name: "Ice cream sandwich",
          calories: 237
        },
        {
          name: "Eclair",
          calories: 262
        },
        {
          name: "Cupcake",
          calories: 305
        }
      ]
    };
  }
};
</script>

<style></style>
