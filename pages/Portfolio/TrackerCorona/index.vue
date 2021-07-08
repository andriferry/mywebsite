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

          <v-card rounded="md" class="pa-2 my-5">
            <v-card-title
              class="capitalize font-weight-normal primayrColor--text text-h6"
              >Data total covid 19 di beberapa provinsi di
              indonesia</v-card-title
            >
            <v-card-subtitle class="pa-10">
              <TrackerCoronaComponentChartPolarArea />
            </v-card-subtitle>
          </v-card>
        </v-card>
      </v-col>
      <v-col>
        <v-card>
          <v-card-text>
            <TrackerCoronaComponentNews />
          </v-card-text>

          <v-card-actions class="px-6">
            <NuxtLink
              to="/"
              class="capitalize font-weight-bold blue--text pa-1"
            >
              <v-hover v-slot="{ hover }" open-delay="20" close-delay="50">
                <v-btn
                  text
                  class="text-xl tracking-widest"
                  :class="hover ? 'red white--text' : false"
                  v-text="'All news'"
                >
                </v-btn>
              </v-hover>
            </NuxtLink>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  async fetch() {
    await this.$axios.$get("/update/").then(result => {
      let { total } = result.update;

      this.dataStat[0].total = total.jumlah_positif;
      this.dataStat[1].total = total.jumlah_sembuh;
      this.dataStat[2].total = total.jumlah_meninggal;
    });
  },

  layout: "coronalayout",

  data() {
    return {
      jumlah_kasus: [],
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
