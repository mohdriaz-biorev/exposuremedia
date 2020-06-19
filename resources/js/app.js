require('./bootstrap');
window.Vue = require('vue');

import { Form, HasError, AlertError } from 'vform';
import axios from 'axios';
import Vue2Filters from 'vue2-filters';
import numeral from 'numeral';
import VueRangeSlider from 'vue-range-component';
import 'vue-range-component/dist/vue-range-slider.css';


window.Form = Form;
Vue.component(HasError.name, HasError);
Vue.component(AlertError.name, AlertError);

Vue.component('home-component', require('./components/home/HomeComponent.vue').default);
Vue.component('vue-range-slider', VueRangeSlider );

Vue.filter("freeNumber", function (value) {
    return numeral(value).format("0,0");
});
const app = new Vue({
    el: '#app'
});
