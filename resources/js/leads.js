let crudleads = require('./components/CrudLeadsComponent.vue');

const leads = new Vue({
    el: '#leads',
    components:{
        crudleads,
    },
    data() {
        return {
            categoryUUID: null
        }
    }
});

