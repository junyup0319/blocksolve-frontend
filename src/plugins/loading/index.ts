import Vue from 'vue';
import LoadingDefault from './loading-default';


declare module 'vue/types/vue' {
  interface Vue {
    $loadingDefault: LoadingDefault;
  }
}

export default {
  install(vue: typeof Vue, options: any) {
    if (Vue.prototype.$loadingDefault !== undefined) {
      Vue.prototype.$loadingDefault.destroy();
    }

    const loadingDefault = new LoadingDefault();

    loadingDefault.$mount(document.body.appendChild(document.createElement('div')));

    Vue.prototype.$loadingDefault = loadingDefault;
  },
};
