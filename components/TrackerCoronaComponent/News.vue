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
export default {};
</script>

<style></style>
