<template>
    <div>
        <transition name="load-phone-call-box" mode="out-in" appear>
            <div class="phone-alert-box" v-show="callRinging">
                <div class="card border-2 border-dark rounded-0">
                    <div class="card-header text-white bg-dark rounded-0"><strong><i class="fas fa-phone-square"></i> New phone call</strong></div>
                    <div class="card-body">
                        Incoming call from: <strong>{{caller}}</strong><br/>
                        Calling to: <strong>{{ site }}</strong><br/>
                        City/State: <strong>{{ city.city }}/{{ city.state.state_code }}</strong>
                        <hr>
                        <div class="row">
                            <div class="col-md-6">
                                <a :href="dstRoute" class="btn btn-lg btn-success btn-block" @click="answerCall"><i class="fas fa-phone"> </i> Answer</a>
                            </div>
                            <div class="col-md-6">
                                <button class="btn btn-lg btn-danger btn-block" @click="dropCall"><i class="fas fa-phone-slash"></i> Drop</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<style lang="scss" scoped>
    .load-phone-call-box {
        &-enter-active,
        &-leave-active {
            transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)
        }
        &-enter,
        &-leave-to {
            transform: translateY(-40px);
            opacity: 0;
        }
    }
</style>


<script>
export default {
    props: {
        userId: 0,
        dstRoute: ''
    },
    data() {
        return {
            callRinging: false,
            site: '',
            caller: '',
            city: {
                city: 'Boston',
                state: {
                    state_code: 'MA'
                }
            }
        }
    },
    mounted() {
        Echo.private('Call.User.'+this.userId)
            .listen('IncomingCall', (e) => {
                this.callRinging = true;
                this.site = e.site.name;
                this.city = e.site.city;
                console.log(e);
            })
            .listen('CallEnded', (e) => {
                this.callRinging = false;
            });
    },    
    methods: {
        answerCall() {
            this.callRinging = false;
        },
        dropCall() {
            this.callRinging = false;
        }
    }
}
</script>


