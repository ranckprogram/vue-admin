import Vue from 'vue';
import App from './App.vue';

import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';


import routes from "@/router"

Vue.config.productionTip = false;

Vue.use(Antd);
new Vue({
  routes,
  render: h => h(App),
}).$mount('#app')
