<template>
    <div>
        <div v-if="!isLoading">
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

import Twilio from 'twilio-client';

export default {
    props: {
        workspaceSid: null,
        workerSid: '',
        userId: ''
    },
    data() {
        return {
            currentActivity: {
                sid: '',
                friendly_name: ''
            },
            device: null,
            isLoading: true
        }
    },
    mounted() {
        this.initStatus();
        Echo.private('User.Status.'+this.userId)
            .listen('WorkerActivityChanged', (e) => {
                if (this.currentActivity.friendly_name != e.eventData.WorkerActivityName) {
                    this.getActivity(e.eventData.WorkerActivityName)
                        .then(r => {
                            this.currentActivity = r.data;
                        });
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
                }
                console.log(e);
            })
    },    
    methods: {
        clicked() {
            switch (this.currentActivity.friendly_name) {
                case 'Offline':
                    this.goIdle();
                    break;
                case 'Idle':
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
                    ).then(async (r) => {
                        this.currentActivity = r.data;
                        this.isLoading = false;
                    })
                    .catch((error) => {
                        console.log(error);
                    })
        },
        goToStatus(activity) {
            this.isLoading = true;

            this.getActivity(activity)
                .then(async (r) => {
                    this.currentActivity = r.data;
                    let updateData = {
                        _token: this.$csrf_token,
                        twilio_worker_sid: this.workerSid,
                        twilio_activity_sid: this.currentActivity.sid
                    }
                    axios.post('/admin/update-worker-activity', updateData)
                        .then(async (response) => {
                            console.log(response);
                            this.isLoading = false;
                        })
                        .catch((error) => {
                            console.log(error);
                        });
                })
                .catch((e) => {
                    console.log(e);
                });
        },
        goOffline() {
            this.goToStatus('Offline');
        },
        goIdle() {
            this.goToStatus('Idle');
        },
        goBusy() {
            this.goToStatus('Busy');
        },
        goReserved() {
            this.goToStatus('Reserved');
        },
        getActivity(name) {
            let data = {
                _token: this.$csrf_token,
                workspace: this.workspaceSid,
                activity: name
            };

            return axios.post('/admin/get-activity-by-name', data);
        },
        setupDevice() {
            axios.get('/token')
                .then(async (r) => {
                    this.device.setup(r.data);
                    this.device.ca
                    console.log(r);
                })
                .catch((e) => {
                    console.log(e);
                });
        }
    },
    computed: {
        status() {
            switch (this.currentActivity.friendly_name) {
                case 'Offline':
                    return {
                        class: {'btn': true, 'btn-secondary': true},
                        icon: {'fas': true, 'fa-phone-slash': true},
                        text: this.currentActivity.friendly_name
                    }
                    break;
                case 'Idle':
                    return {
                        class: {'btn': true, 'btn-success': true},
                        icon: {'fas': true, 'fa-play': true},
                        text: this.currentActivity.friendly_name
                    }
                    break;
                case 'Busy':
                    return {
                        class: {'btn': true, 'btn-danger': true},
                        icon: {'fas': true, 'fa-phone': true},
                        text: this.currentActivity.friendly_name
                    }
                    break;
                default:
                    return {
                        class: {'btn': true, 'btn-warning': true},
                        icon: {'fas': true, 'fa-pause': true},
                        text: this.currentActivity.friendly_name
                    }
                    break;
            }
        }
    }
}
</script>
