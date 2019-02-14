<template>
    <div class="alert alert-success" style="z-index: 1000" id="call-alert" v-if="callringing">
        Incoming call to site: <strong>{{ site }} - {{ city.city }}/{{ city.state.state_code }}</strong>
        <a :href="dstRoute" class="btn btn-sm btn-warning" @click="answercall">
            <i class="fas fa-bell"> </i> Answer
        </a>
    </div>
</template>

<script>
export default {
    props:['userId', 'dstRoute'],
    data(){
        return {
            callringing: false,
            site: '',
            caller: '',
            city: '',
            state: ''
        }
    },
    mounted() {
        Echo.private('Call.User.'+this.userId)
            .listen('IncomingCall', (e) => {
                this.callringing = true;
                this.site = e.site.name;
                this.city = e.site.city;
                this.state = e.site.state_name;
                console.log(e);
            })
            .listen('CallEnded', (e) => {
                this.callringing = false;
            });
    },    
    methods: {
        answercall() {
            this.callringing = false;
        }
    }
}
</script>