<template>
    
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
