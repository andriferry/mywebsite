<template>
  <v-item-group mandatory color="primary">
    <v-container>
      <v-row>
        <v-col cols="12" class="pa-0" v-for="n in 5" :key="n">
          <v-list-item three-line>
            <v-list-item-avatar size="100" rounded="xl">
              <v-img src="https://cdn.vuetifyjs.com/images/lists/2.jpg"></v-img>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title>Three-line item</v-list-item-title>
              <v-list-item-subtitle>
                Secondary line text Lorem ipsum dolor sit amet,
              </v-list-item-subtitle>
              <v-list-item-subtitle>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos vel
                molestiae quidem minus cum asperiores amet odio officiis,
                consectetur possimus unde eum nam natus ea maiores a laudantium
                laborum porro!
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
      artikel: []
    };
  },

  async asyncData({ $axios }) {
    let date = new Date();

    //Convert Number toString
    let mm = (date.getMonth() + 1).toString();
    let dd = date.getDate().toString();
    let yyyy = date.getFullYear().toString();

    mm.length < 2 ? (mm = "0" + mm) : false;
    dd.length < 2 ? (dd = "0" + dd) : false;

    let yyyymmdd = `${yyyy}-${dd}-${mm}`;

    let articles = [];
    await $axios({
      method: "get",
      url: "/news/",
      headers: {
        Authorization: "81b0c3b7898142288a8aecdf843cbd48"
      },
      params: {
        qInTitle: "corona",
        language: "id",
        from: yyyymmdd
      }
    })
      .then(res => {
        let { articles } = res.data;

        for (let i = 0; i < 5; i++) {
          this.articles.push[articles[i]];
        }
      })
      .catch(err => {
        console.log(err);
      });

    return { articles };
  },
  mounted() {
    console.log(this.articles);
  }
};
</script>

<style></style>
