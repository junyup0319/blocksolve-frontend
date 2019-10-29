import Vue from 'vue';
import ResultDialog from './result-dialog';

declare module 'vue/types/vue' {
  interface Vue {
    $resultDialog: ResultDialog;
  }
}



export default {
  install(vue: typeof Vue, options: any) {
    if (vue.prototype.$resultDialog !== undefined) {
      Vue.prototype.$resultDialog.destroy();
    }
    const resultDialog = new ResultDialog();
    resultDialog.$mount(document.body.appendChild(document.createElement('div')));

    Vue.prototype.$resultDialog = resultDialog;
  },
};

