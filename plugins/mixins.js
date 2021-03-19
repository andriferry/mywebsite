import Vue from "vue";
import Vuetify from "vuetify";
import * as easings from "vuetify/es5/services/goto/easing-patterns";

// Make sure to pick a unique name for the flag
// so it won't conflict with any other mixin.


const option = {
    duration: 1000,
    offset: -15,
    easing: easings.easeInOutCubic
};

if (!Vue.__my_mixin__) {
  Vue.__my_mixin__ = true
    Vue.mixin({
        methods: {
        clickScroll(value) {
            this.$vuetify.goTo(value, option);
        }
    },
  }) // Set up your mixin then
}

