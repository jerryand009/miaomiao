import Vue from "vue";
import App from "./App.vue";
import router from "./routers";
import store from "./stores";
import "./registerServiceWorker";
import axios from "axios"
Vue.prototype.axios = axios;
Vue.config.productionTip = false;
Vue.filter("setWidthHeight",function(url,WidthXHeight) {
  if (url){
    return url.replace(/w\.h/,WidthXHeight);
  }
});
import Scroller from '@/components/scroller'
import Loading from '@/components/loading'
Vue.component("Scroller",Scroller);
Vue.component("Loading",Loading);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
