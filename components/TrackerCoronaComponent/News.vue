<template>
  <v-item-group mandatory color="primary">
    <v-container>
      <v-row>
        <v-col
          cols="12"
          class="pa-0"
          v-for="(data, index) in getNews"
          :key="index"
          tag="a"
          :href="data.url"
        >
          <v-hover v-slot="{ hover }">
            <v-list-item three-line>
              <v-list-item-avatar size="100" rounded="xl">
                <v-img
                  :lazy-src="data.urlToImage"
                  eager
                  :src="data.urlToImage"
                ></v-img>
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-subtitle
                  class="font-weight-bold text-body-1"
                  :class="hover ? 'red--text' : 'primaryColor--text'"
                >
                  {{ data.title }}
                </v-list-item-subtitle>

                <v-list-item-subtitle>
                  <span class="capitalize"
                    >{{ data.publishedAt | day(data.publishedAt) }},</span
                  >

                  <span>{{ data.publishedAt | toDate(data.publishedAt) }}</span>

                  <span>{{ data.publishedAt | month(data.publishedAt) }}</span>
                  <span>{{ data.publishedAt | year(data.publishedAt) }}</span>
                </v-list-item-subtitle>
                <v-list-item-subtitle>
                  {{ data.content }}
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </v-item-group>
</template>

<script>
export default {
  props: ["news"],
  data() {
    return {
      articles: [],
      date: new Date()
    };
  },
  computed: {
    getNews() {
      let articles = [];
      for (let i = 0; i < 5; i++) {
        articles.push(this.news[i]);
      }
      return articles;
    }
  },

  // async fetch() {
  //   let articles = [];

  //   await this.$axios({
  //     method: "get",
  //     url: "/news/",
  //     headers: {
  //       Authorization: process.env.NEWS_TOKEN
  //     },
  //     params: {
  //       q: "Corona",
  //       language: "id"
  //     }
  //   })
  //     .then(res => {
  //       let { articles } = res.data;

  //       for (let i = 0; i < 5; i++) {
  //         this.articles.push(articles[i]);
  //       }
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // },

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
    year(year) {
      let getYear = new Date(year);
      return getYear.getFullYear();
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
