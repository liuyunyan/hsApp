// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';

import router from './router';
import Mint from './mintUi';

// Inject Global Css And Themes Css
// import './sass/index.scss';
// import './sass/themes/default.scss';

Vue.config.productionTip = false;

// Sync Register Global Components
Vue.component('fallback', resolve => resolve(require('./components/fallback')));


// /* eslint-disable no-new */
// new Vue({
//     el: '#app',
//     router,
//     // store,
//     template: '<App/>',
//     components: { App }
// });
if ('ontouchstart' in window) {
    document.addEventListener('deviceready', function () {
        console.log(navigator.camera);
        new Vue({
            el: '#app',
            router,
            // store,
            template: '<App/>',
            components: { App }
        });
    }, false)
} else {
    new Vue({
        el: '#app',
        router,
        // store,
        template: '<App/>',
        components: { App }
    });
}