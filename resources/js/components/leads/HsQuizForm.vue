<template>
	<div>
		<transition name="load-transition" mode="out-in">
			<div
				class="alert alert-success"
				v-if="isLoading"
				style="position: absolute; margin: auto; width: 100%; z-index:1000"
				key="0"
			>
				<i class="fas fa-spinner fa-spin"></i> Loading...
			</div>
		</transition>
		<transition name="fade" mode="out-in" appear>
			<hs-quiz-review></hs-quiz-review>
		</transition>
		<button class="btn btn-success float-right mt-3 mr-3" @click.prevent="openQuizModal">
			<i class="far fa-list-alt fa-lg"></i>
			Quiz
		</button>
		<b-modal ref="modalQuiz" size="xl" hide-footer title="Quiz">
			<div style="overflow-y: auto; overflow-x: hidden; height: 400px;">
				<keep-alive>
					<transition name="fade" mode="out-in" appear>
						<component v-bind:is="currentComponent"></component>
					</transition>
				</keep-alive>
			</div>
			<div class="form-group mt-3 mb-0">
				<div class="row border-top pt-3 pl-3">
					<button class="btn btn-secondary mr-2" :disabled="backDisabled" @click.prevent="prev">
						<i class="fas fa-arrow-left"></i>
						Back
					</button>
					<button class="btn btn-success mr-2" :disabled="nextDisabled" @click.prevent="next">
						Next
						<i class="fas fa-arrow-right"></i>
					</button>
				</div>
			</div>
		</b-modal>
	</div>
</template>

<script>
import HsQuiz from "./quiz/HsQuiz";
import HsCategories from "./quiz/HsCategories";
import HsQuizReview from "./quiz/HsQuizReview";
import bModal from "bootstrap-vue/es/components/modal/modal";
import bModalDirective from "bootstrap-vue/es/directives/modal/modal";
import RegisterStoreModule from "../../mixins/RegisterStoreModule";
import HsQuizModule from "../../store/modules/quiz";
import HsCategoriesModule from "../../store/modules/categories";
import HsQuizTheme from "../../store/modules/quiz-theme";

export default {
	mixins: [RegisterStoreModule],
	components: {
		HsQuiz,
		HsCategories,
		HsQuizReview,
		bModal
	},
	directives: {
		bModalDirective
	},
	props: {
		leadUuid: {
			type: String,
			default: null
		},
		suffixTheme: {
			type: String,
			default: "light"
		},
		enableShadow: {
			type: Boolean,
			default: true
		}
	},
	created() {
		this.registerStoreModule("HsQuizTheme", HsQuizTheme);
		this.registerStoreModule("HsQuiz", HsQuizModule);
		this.registerStoreModule("HsCategories", HsCategoriesModule);
		this.$store.commit("HsQuizTheme/setSuffixTheme", this.suffixTheme);
		this.$store.commit("HsQuizTheme/setEnableShadow", this.enableShadow);
		if (this.leadUuid !== null) {
			this.$store.dispatch("HsQuiz/loadExistingLead", this.leadUuid);
		} else {
			this.$store.dispatch("HsCategories/apiGetCategories");
			this.$store.commit("HsQuiz/setFinishedQuiz", false);
		}
	},
	computed: {
		currentComponent() {
			return this.$store.getters["HsQuiz/currentComponent"];
		},
		backDisabled() {
			return this.$store.getters["HsQuiz/isFirstComponent"];
		},
		nextDisabled() {
			return !this.$store.getters["HsQuiz/hasNextComponent"];
		},
		isLoading() {
			return this.$store.state.HsQuiz.isLoading;
		},
		curEl() {
			let parent = this.$children.find(
				c => c.$options._componentTag === "b-modal"
			);
			return parent.$children.find(
				c => c.$options._componentTag === this.currentComponent
			);
		},
		closeModalOnFinish() {
			return (
				this.$store.state.HsQuiz.showingModal &&
				this.$store.state.HsQuiz.finishedQuiz
			);
		}
	},
	methods: {
		next() {
			this.$store.dispatch("HsQuiz/next", this.curEl);
		},
		prev() {
			this.$store.dispatch("HsQuiz/prev", this.curEl);
		},
		submitLead() {
			this.$store.dispatch("postLead", true);
		},
		openQuizModal() {
			this.$refs.modalQuiz.show();
			console.log(this.$parent.$refs.categoryUuid);
			this.$store.dispatch("HsQuiz/showingModal", true);
			this.$store.commit("HsQuiz/setModalRef", this.$refs.modalQuiz);
			this.$store.commit("HsQuiz/setHiddenComponent", this.$parent.$refs.leadQuestions);
			this.$store.commit("HsCategories/setHiddenCategoryComponent", this.$parent.$refs.categoryUuid);
			this.$store.commit("HsQuiz/currentComponentIndex", 0);
		},
		closeQuizModal() {
			this.$refs.modalQuiz.hide();
			this.$store.dispatch("HsQuiz/showingModal", true);
		}
	}
};
</script>