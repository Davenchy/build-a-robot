import Vue from 'vue';
import App from '@/App.vue';

import router from '@/router';
import store from '@/store';

import currencyFilter from '@/shared/CurrencyFilter';

Vue.config.productionTip = false;

Vue.filter('currency', currencyFilter);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
