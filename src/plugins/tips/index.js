import alert from '../../../packages/alert';
import confirm from '../../../packages/confirm';
import toast from '../../../packages/toast';

export default {
    install (Vue) {
    if (!Vue.$seal) {
      Vue.$seal = {
        alert,
        confirm,
        toast
      }
    } else {
      Vue.$seal.alert = alert;
      Vue.$seal.confirm = confirm;
      Vue.$seal.toast = toast
    }

    Vue.mixin({
      created: function () {
        this.$seal = Vue.$seal
      }
    })
}
}
