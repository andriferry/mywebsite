<template>
  <v-card-text>
    <v-virtual-scroll :items="dataCases" :item-height="40" height="84">
      <template v-slot:default="{ item }">
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>{{ item }}</v-list-item-title>
          </v-list-item-content>

          <v-list-item-action>
            1929938838383
          </v-list-item-action>
        </v-list-item>
      </template>
    </v-virtual-scroll>
  </v-card-text>
</template>

<script>
export default {
  data() {
    return {
      dataCases: ["Jumlah Positif", "Jumlah Negatif", "Jumlah Meningggal"]
    };
  }
};
</script>

<style></style>
