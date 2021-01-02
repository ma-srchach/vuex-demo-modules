import Vue from 'vue'
import App from './App.vue'

/** Constants */
import { INITIALISER_FUNCTION } from './store/constants'

/** Modules */
import router from './router'
import store from './store'
import { toInit as modulesToInit } from './store/modules/index'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  created: function() {
    /** Initialising store modules */
    modulesToInit.forEach(module => {
      this.$store.dispatch(`${module}/${INITIALISER_FUNCTION}`);
    });

    /** EXAMPLES OF ACCESSING MODULES */

    // Accessing to property from submodule state
    // this.$store.state.address.userAddresses

    // Dispatching submodule action
    // this.$store.dispatch('address/initStoreModule');

    // Commiting submodule mutations
    // this.$store.commit('address/printExample');
  }
}).$mount('#app')
