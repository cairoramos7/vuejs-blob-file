import Vue from "vue";
import App from "./App.vue";

// UI
import SuiVue from "semantic-ui-vue";
import 'semantic-ui-css/semantic.min.css';

Vue.use(SuiVue);

Vue.config.productionTip = false;

new Vue({
	render: h => h(App)
}).$mount("#app");
