<template>
    <label v-if="showMe">
        <input type="checkbox" class="hs-input-check" 
                :id="answer.uuid" 
                :value="answer.uuid" 
                :checked="checkedAnswer"
                @change="selectAnswer">
        <span class="list-group-item-text">
            <i class="far fa-lg"></i>
            {{answer.answer}}
        </span>
    </label>
</template>

<script>

export default {
    props: {
        uuid: String
    },
    methods: {
        selectAnswer(e) {
            this.$store.dispatch('HsQuiz/selectCheckboxes', e.target);
        }
    },
    computed: {
        checkedAnswer() {
            if (Array.isArray(this.$store.state.HsQuiz.currentQuestion.selected_answers)) {
                let x = this.$store.state.HsQuiz.currentQuestion.selected_answers.find(a => a.uuid === this.uuid)
                return (x) ? x.uuid : false;
            }

        },
        answer() {
            return this.$store.getters['HsQuiz/answer'](this.uuid);
        },
        showMe() {
            return (
                (this.answer.answer_type_uuid === this.$store.state.HsQuiz.answerTypes.MULTIPLE_CHOICE) ||
                (this.answer.answer_type_uuid === this.$store.state.HsQuiz.answerTypes.MULTIPLE_CHOICE_TEXT)
            )
        }
    }
}
</script>