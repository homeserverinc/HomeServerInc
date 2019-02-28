<template>
    <div class="progress hs-progress" style="height: 3px;">
        <div class="progress-bar bg-success hs-progress-bar" role="progressbar" :aria-valuenow="current" :aria-valuemin="min" :aria-valuemax="max"></div>
    </div>
</template>

<script>
export default {
    computed: {
        min() {
            return 0;
        },
        max() {
            return this.$store.getters.progressMax;
        },
        current() {
            return 0;
        }
    }
}
</script>
