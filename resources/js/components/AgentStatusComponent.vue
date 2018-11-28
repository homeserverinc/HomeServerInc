<template>
    <div>
        <div v-if="statusCode >= 0">
            <button v-bind:class="status.class" id="agent-call-status" @click="clicked()" data-container="agent-status" data-toggle="popover" data-placement="bottom" data-content="Click here to be able to receive customers calls.">
                <i v-bind:class="status.icon"></i> {{ status.text }}
            </button>
        </div>
        <div v-else>
            <button class="btn btn-secondary disabled">
                <i class="fas fa-circle-notch fa-spin" style="color: #fff"></i> Loading...
            </button>
        </div>
    </div>
</template>

<script>

export default {
    props: [
        'workspaceSid',
        'workerSid',
        'userId'
    ],
    data() {
        return {
            statusCode: -1
        }
    },
    mounted() {
        this.initStatus();
        Echo.private('User.Status.'+this.userId)
            .listen('WorkerActivityChanged', (e) => {
                switch (e.eventData.WorkerActivityName) {
                    case 'Idle':
                        this.goIdle();
                        break;
                    case 'Offline':
                        this.goOffline();
                        break;
                    case 'Busy':
                        this.goBusy();
                        break;
                    case 'Reserved':
                        this.goReserved();
                        break;
                }
                console.log(e);
            })
    },    
    methods: {
        clicked() {
            switch (this.statusCode) {
                case 0:
                    this.goIdle();
                    break;
                case 1:
                    this.goOffline();
                    break;
                    
                default:
                    break;
            }
        },
        initStatus() {
            let data = {
                '_token': this.$csrf_token,
                'twilio_worker_sid': this.workerSid
            }
            axios.post('/admin/get-current-worker-activity', 
                        data
                    ).then((response) => {
                        this.statusCode = response.data
                    })
                    .catch((error) => {
                        console.log(error);
                    })
        },
        goToStatus(statusCode, activityId) {
            let data = {
                '_token': this.$csrf_token,
                'twilio_worker_sid': this.workerSid,
                'twilio_activity_id': activityId
            }
            axios.post('/admin/update-worker-activity', 
                    data
                ).then((response) => {
                    this.statusCode = statusCode;
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        goOffline() {
            this.goToStatus(0, 1);
        },
        goIdle() {
            this.goToStatus(1, 2);
        },
        goBusy() {
            this.goToStatus(2, 3);
        },
        goReserved() {
            this.goToStatus(3, 4)
        }
    },
    computed: {
        status() {
            switch (this.statusCode) {
                case 0:
                    return {
                        class: {'btn': true, 'btn-secondary': true},
                        icon: {'fas': true, 'fa-phone-slash': true},
                        text: 'Offline'
                    }
                    break;
                case 1:
                    return {
                        class: {'btn': true, 'btn-success': true},
                        icon: {'fas': true, 'fa-play': true},
                        text: 'Idle'
                    }
                    break;
                case 2:
                    return {
                        class: {'btn': true, 'btn-danger': true},
                        icon: {'fas': true, 'fa-phone': true},
                        text: 'Busy'
                    }
                    break;
                default:
                    return {
                        class: {'btn': true, 'btn-warning': true},
                        icon: {'fas': true, 'fa-pause': true},
                        text: 'Reserved'
                    }
                    break;
            }
        }
    }
}
</script>
