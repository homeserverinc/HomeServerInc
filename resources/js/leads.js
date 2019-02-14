let crudleads = require('./components/CrudLeadsComponent.vue');

const leads = new Vue({
    el: '#leads',
    components:{
        crudleads,
    },
    data() {
        return {
            serviceId: null
        }
    }
});

