<template>
    <div class="card">
        <div class="card-header">Questions</div>
        <div class="card-body">

        </div>
    </div>
</template>

<script>

import quizStore from '../../store/modules/quiz';

export default {
    created() {
        this.$store.registerModule('quizStore', quizStore);
    },
    computed: {
        service() {
            return this.$store.state.quiz;
        },
        quiz() {
            return this.$store.state.quiz;
        }       
    }
}
</script>
