<template>
	<transition name="fade" mode="in-out" appear v-cloak>
		<div class="card" v-if="finishedQuiz">
			<div class="card-header">Project Details</div>
			<div class="card-body hs-questions-review pb-0"
				style="max-height: 560px !important; overflow-y: scroll; overflow-x: hidden;">
				<div class="hs-question hs-title-overflow">
					<strong>Service Category</strong>
					<div :class="['hs-questions-review-item-'+suffixTheme, {'shadow': enableShadow}]">
						<div class="hs-answer">
							<div>
								<i class="fas fa-check text-success"></i>
								{{categoryName}}
							</div>
						</div>
					</div>
				</div>
				<div class="m-2 border border-top-1 border-secondary">
				</div>
				<div class="hs-question hs-title-overflow" v-for="q in questions" :key="q.uuid">
					<strong>{{ q.question }}</strong>
					<div :class="['hs-questions-review-item-'+suffixTheme, {'shadow': enableShadow}]">
						<div v-for="a in q.answers" :key="a.uuid" class="hs-answer">
							<div v-if="isSelected(q, a)">
								<i class="fas fa-check text-success"></i>
								{{ a.answer }}
								<div
									v-if="isOther(a)"
									:class="'hs-questions-review-item-other-'+suffixTheme"
								>{{ q.custom_answer }}</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="jumbotron" v-else v-cloak>
			<div class="display-4" v-if="!isLoading">No data</div>
		</div>
	</transition>
</template>

<script>
import { PROJECT_DEADLINE } from "../../../constants";

export default {
	computed: {
		questions() {
			return this.$store.state.HsQuiz.answeredQuestionsPreview;
		},
		questionTypes() {
			return this.$store.state.HsQuiz.questionTypes;
		},
		answerTypes() {
			return this.$store.state.HsQuiz.answerTypes;
		},
		projectDeadLine() {
			return PROJECT_DEADLINE[this.$store.state.HsDetails.deadline];
		},
		projectDetails() {
			return this.$store.state.HsDetails.projectDetails;
		},
		firstName() {
			return this.$store.state.HsNameContact.firstName;
		},
		lastName() {
			return this.$store.state.HsNameContact.lastName;
		},
		phone() {
			return this.$store.state.HsNameContact.phone;
		},
		email() {
			return this.$store.state.HsNameContact.email;
		},
		address() {
			return this.$store.state.HsAddress.address;
		},
		suffixTheme() {
			return this.$store.state.HsQuizTheme.suffixTheme;
		},
		enableShadow() {
			return this.$store.state.HsQuizTheme.enableShadow;
		},
		finishedQuiz() {
			return this.$store.state.HsQuiz.finishedQuiz;
		},
		categoryName() {
			if (this.$store.state.HsCategories.category !== undefined) {
				return this.$store.state.HsCategories.category.category;
			}
		},
		isLoading() {
			return this.$store.state.HsQuiz.isLoading;
		}
	},
	methods: {
		isSelected(q, a) {
			if (Array.isArray(q.selected_answers)) {
				return (
					q.selected_answers.find(sa => sa.uuid === a.uuid) !==
					undefined
				);
			} else {
				return q.selected_answers.uuid === a.uuid;
			}
		},
		isOther(a) {
			return (
				a.answer_type_uuid === this.answerTypes.SINGLE_CHOICE_TEXT ||
				a.answer_type_uuid === this.answerTypes.MULTIPLE_CHOICE_TEXT
			);
		}
	}
};
</script>
