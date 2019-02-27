<template>
    <label v-if="showMe">
        <input type="radio" :id="answer.uuid" name="answerRadio" class="hs-input-radio" :value="answer.uuid" v-model="selectAnswer">
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
    computed: {
        selectAnswer: {
            get() {
                let selected = this.$store.getters['HsQuiz/answerIsSelected'](this.uuid);
                return (selected != null) ? selected.uuid : null;
            },
            set(value) {
                //console.log(this.$parent.$parent.$parent);
                this.$store.dispatch('HsQuiz/answerCurrentQuestion', { 'uuid': this.uuid, 'component': this.$parent.$parent.$parent });
                //this.$store.commit('HsQuiz/setSelectedAnswer', { 'uuid': this.uuid });
            }
        },
        answer() {
            return this.$store.getters['HsQuiz/answer'](this.uuid);
        },
        showMe() {
            return (
                (this.answer.answer_type_uuid === this.$store.state.HsQuiz.answerTypes.SINGLE_CHOICE) ||
                (this.answer.answer_type_uuid === this.$store.state.HsQuiz.answerTypes.SINGLE_CHOICE_TEXT)
            )
        }
    }
}
</script>