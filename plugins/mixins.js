import Vue from "vue"

// Make sure to pick a unique name for the flag
// so it won't conflict with any other mixin.
if (!Vue.__my_mixin__) {
  Vue.__my_mixin__ = true
    Vue.mixin({
        mounted() {
            console.log('from mixins mode on')
      }
  }) // Set up your mixin then
}

