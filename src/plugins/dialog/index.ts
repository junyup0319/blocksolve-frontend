import Vue from 'vue';
import Dialog from './dialog';


declare module 'vue/types/vue' {
  interface Vue {
    $dialog: Dialog;
  }
}

export default {
  install(vue: typeof Vue, options: any) {
    if (Vue.prototype.$dialog !== undefined) {
      Vue.prototype.$dialog.destroy();
    }

    const dialog = new Dialog();

    dialog.$mount(document.body.appendChild(document.createElement('div')));

    Vue.prototype.$dialog = dialog;
  },
};
