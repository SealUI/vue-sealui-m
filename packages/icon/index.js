import SealIcon from './src/main';

/* istanbul ignore next */
SealIcon.install = function(Vue) {
    Vue.component(SealIcon.name, Icon);
};

export default SealIcon;
