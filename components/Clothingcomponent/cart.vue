<template>
  <v-navigation-drawer v-model="open" right temporary fixed>
    <v-list dense>
      <v-list-item-content>
        <v-list-item-title class="px-4 font-bold text-xl uppercase"
          >Shopping cart</v-list-item-title
        >
      </v-list-item-content>

      <v-list-item-group color="primary" v-model="group">
        <v-hover v-slot="{ hover }" v-for="menu in 3" :key="menu">
          <v-list-item three-line>
            <v-list-item-avatar tile width="50" height="50">
              <v-img
                class=""
                lazy-src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8dHNoaXJ0fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
                src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8dHNoaXJ0fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60"
              ></v-img>
            </v-list-item-avatar>

            <v-list-item-content class="mx-2">
              <v-list-item-title :class="{ 'text-cyan': hover }"
                >T-shirt Green hanger
              </v-list-item-title>
              <v-list-item-subtitle>
                3 items x $ 5
              </v-list-item-subtitle>
              <v-list-item-subtitle>
                $ 15
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-hover>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      group: null,
      open: false
    };
  },
  watch: {
    group() {
      this.openMenu = false;
    }
  }
};
</script>

<style></style>
