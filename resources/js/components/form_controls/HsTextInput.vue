<template>
    <div
        class="list-group-item"
        :class="['textarea-list-group-'+suffixTheme, {'shadow': enableShadow}]"
        v-if="showMe"
    >
        <textarea class="form-control hs-input-text" v-model="customText" cols="30" rows="4"></textarea>
    </div>
</template>

<script>
export default {
    props: {
        uuid: String
    },
    computed: {
        customTextId() {
            return this.uuid + "_text";
        },
        answer() {
            return this.$store.getters["HsQuiz/answer"](this.uuid);
        },
        showMe() {
            var answersSelecteds = this.$store.getters[
                "HsQuiz/answerIsSelected"
            ](this.uuid);

            if (answersSelecteds != undefined) {
                switch (this.answer.answer_type_uuid) {
                    case this.$store.state.HsQuiz.answerTypes
                        .SINGLE_CHOICE_TEXT:
                        answersSelecteds.uuid == this.uuid;
                        break;

                    case this.$store.state.HsQuiz.answerTypes
                        .MULTIPLE_CHOICE_TEXT:
                        return (answersSelecteds.uuid = this.uuid);
                        break;

                    default:
                        return false;
                        break;
                }
            }
        },
        isSingleChoice() {
            return (
                this.answer.answer_type_uuid ==
                this.$store.state.HsQuiz.answerTypes.SINGLE_CHOICE_TEXT
            );
        },
        customText: {
            get() {
                return this.$store.state.HsQuiz.currentQuestion.custom_answer;
            },
            set(value) {
                this.$store.commit("HsQuiz/setCustomText", value);
            }
        },
        suffixTheme() {
            return this.$store.state.suffixTheme;
        },
        enableShadow() {
            return this.$store.state.enableShadow;
        }
    }
};
</script>