
require('./bootstrap');

import router from "./routes"
import VueRouter from "vue-router"
import index from "./index"




window.Vue = require('vue');
//creating component exampleComponent
// Vue.component('example-component', require('./components/ExampleComponent.vue').default);
// Vue.component('example-component2', require('./components/ExampleComponent2.vue').default);

Vue.use(VueRouter)



//creates a new instance of vue for app variable which is then linked to welcome.blade.php
const app = new Vue({
    el: '#app',
    router,
    components:{
        "index" : index
    }

});
