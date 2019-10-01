import Vue from 'vue';
import App from '@/app';
import router from './router';
import store from './store';
import './registerServiceWorker';
import vuetify from './plugins/vuetify';

import 'ant-design-vue/dist/antd.css';
import {
  Button,
  Checkbox,
  DatePicker,
  Dropdown,
  Form,
  Icon,
  Input,
  Menu,
  Pagination,
  Select,
  Tabs,
} from 'ant-design-vue';

Vue.use(Form);
Vue.use(Button);
Vue.use(Menu);
Vue.use(Icon);
Vue.use(Select);
Vue.use(DatePicker);
Vue.use(Input);
Vue.use(Checkbox);
Vue.use(Pagination);
Vue.use(Dropdown);
Vue.use(Tabs);

Vue.config.productionTip = false;


new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
