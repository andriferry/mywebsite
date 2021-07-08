<template>
  <v-item-group mandatory color="primary">
    <v-container>
      <v-row>
        <v-col
          cols="12"
          class="pa-0"
          v-for="(data, index) in articles"
          :key="index"
        >
          <v-list-item three-line>
            <v-list-item-avatar size="100" rounded="xl">
              <v-img :src="data.urlToImage"></v-img>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-subtitle class="font-weight-bold text-body-1">
                {{ data.title }}
              </v-list-item-subtitle>
              <!-- <v-list-item-subtitle>
                {{ data.publishedAt | day(data.publishedAt) }}
              </v-list-item-subtitle> -->

              <v-list-item-subtitle>
                <span class="capitalize"
                  >{{ data.publishedAt | day(data.publishedAt) }},</span
                >
                <!-- <span>{{ data.publishdAt | toDate(data.pubslihedAt) }}</span> -->
                <span>{{ data.publishedAt | toDate(data.publishedAt) }}</span>

                <span>{{ data.publishedAt | month(data.publishedAt) }}</span>
                <span>2021</span>
              </v-list-item-subtitle>
              <v-list-item-subtitle>
                {{ data.content }}
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-col>
      </v-row>
    </v-container>
  </v-item-group>
</template>

<script>
export default {
  data() {
    return {
      articles: [],
      date: new Date()
    };
  },

  async fetch() {
    let articles = [];
    await this.$axios({
      method: "get",
      url: "/news/",
      headers: {
        Authorization: "81b0c3b7898142288a8aecdf843cbd48"
      },
      params: {
        q: "Corona",
        language: "id"
      }
    })
      .then(res => {
        let { articles } = res.data;

        for (let i = 0; i < 5; i++) {
          this.articles.push(articles[i]);
        }
      })
      .catch(err => {
        console.log(err);
      });
  },

  filters: {
    day(day) {
      let date = new Date(day);
      let namesDay = [
        "Minggu",
        "senin",
        "selasa",
        "rabu",
        "kamis",
        "jum'at",
        "sabtu",
        "minggu"
      ];

      return namesDay[date.getDay()];
    },
    toDate(date) {
      let getdate = new Date(date);
      return getdate.getDate();
    },
    month(month) {
      let date = new Date(month);

      let monthNames = [
        "Januari",
        "Februari",
        "Maret",
        "April",
        "May",
        "Juni",
        "Juli",
        "Augustus",
        "September",
        "Oktober",
        "November",
        "Desember"
      ];

      return monthNames[date.getMonth()];
    }
  }
};
</script>

<style></style>
