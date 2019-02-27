<template>
    <div>
        <transition
            appear
            mode="out-in"
            v-on:before-enter="beforeEnter"
            v-on:enter="enter"
            v-on:leave="leave"
            v-on:after-leav="beforeEnter"
            v-bind:css="false">
            <div class="list-group-item" :class="[{'shadow': enableShadow}, 'list-group-item-'+suffixTheme]" v-if="showMe" style="left: 40px">
                <hs-radio-input :uuid="uuid"></hs-radio-input>
                <hs-checkbox-input :uuid="uuid"></hs-checkbox-input>
            </div>
        </transition>
        <transition name="expand" mode="in-out">
            <hs-text-input :uuid="uuid"></hs-text-input>
        </transition>
    </div>
</template>


<script>
import hsTextInput from "./HsTextInput";
import hsRadioInput from "./HsRadioInput";
import hsCheckboxInput from "./HsCheckboxInput";
import Velocity from "velocity-animate";

export default {
    props: {
        uuid: String,
        animationDelay: null
    },
    data() {
        return {
            duration: 350,
            teste: 'info'
        };
    },
    computed: {
        showMe() {
            return this.$store.getters["HsQuiz/answer"](this.uuid).visible;
        },
        suffixTheme() {
            return this.$store.state.suffixTheme;
        },
        theme() {
            switch (this.themeName) {
                case "primary":
                    return {
                        "list-group-item-primary": true,
                        shadow: this.enableShadow
                    };
                    break;

                case "secondary":
                    return {
                        "list-group-item-secondary": true,
                        shadow: this.enableShadow
                    };
                    break;

                case "success":
                    return {
                        "list-group-item-success": true,
                        shadow: this.enableShadow
                    };
                    break;

                case "danger":
                    return {
                        "list-group-item-danger": true,
                        shadow: this.enableShadow
                    };
                    break;

                case "warning":
                    return {
                        "list-group-item-warning": true,
                        shadow: this.enableShadow
                    };
                    break;

                case "info":
                    return {
                        "list-group-item-info": true,
                        shadow: this.enableShadow
                    };
                    break;

                case "light":
                    return {
                        "list-group-item-light": true,
                        shadow: this.enableShadow
                    };
                    break;

                case "dark":
                    return {
                        "list-group-item-dark": true,
                        shadow: this.enableShadow
                    };
                    break;

                default:
                    return {
                        "list-group-item-light": true,
                        shadow: true
                    };
                    break;
            }
        },
        enableShadow() {
            return this.$store.state.enableShadow;
        }
    },
    components: {
        "hs-radio-input": hsRadioInput,
        "hs-checkbox-input": hsCheckboxInput,
        "hs-text-input": hsTextInput
    },
    methods: {
        beforeEnter: function(el) {
            el.style.opacity = 0;
        },
        enter: function(el, done) {
            Velocity(
                el,
                { opacity: 1, translateX: -40 },
                { duration: this.duration + this.animationDelay },
                { complete: done }
            );
        },
        leave: function(el, done) {
            Velocity(
                el,
                { opacity: 0 },
                { duration: this.duration + this.animationDelay },
                { complete: done }
            );
        }
    }
};
</script>