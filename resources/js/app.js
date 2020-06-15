require('./bootstrap');
window.Vue = require('vue');

import { Form, HasError, AlertError } from 'vform';

window.Form = Form;
Vue.component(HasError.name, HasError);
Vue.component(AlertError.name, AlertError);

Vue.component('home-component', require('./components/home/HomeComponent.vue').default);


const app = new Vue({
    el: '#app'
});
