
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

//Vue.component('example-component', require('./components/ExampleComponent.vue'));

//var csrf_token = $('meta[name="csrf-token"]').attr('content');

Vue.prototype.$csrf_token = $('meta[name="csrf-token"]').attr('content');

import AgentStatusComponent from './components/AgentStatusComponent';
import PhoneCallComponent from './components/phone_calls/PhoneCallComponent';

const app = new Vue({
    el: '#app',
    mounted() {
        Echo.join('OnlineUsers')
            .here((users) => {
                //console.log(users);
            }) 
            .joining((user) => {
                //console.log('Joining ' + user.name)
            })
            .leaving((user) => {
                //console.log('Leaving ' + user.name)
            });
    },
    components: {
        'agent-status-component': AgentStatusComponent,
        PhoneCallComponent
    }
});
