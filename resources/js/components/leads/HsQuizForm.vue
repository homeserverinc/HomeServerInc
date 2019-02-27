<template>
	<div>
		<transition name="load-transition" mode="out-in">
			<div
				class="alert alert-success"
				v-if="isLoading"
				style="position: absolute; margin: auto; width: 100%; z-index=1000"
				key="0"
			>
				<i class="fas fa-spinner fa-spin"></i> Loading...
			</div>
		</transition>
		<transition name="fade" mode="out-in" appear>
			<hs-quiz-review></hs-quiz-review>
		</transition>
		<button class="btn btn-success" @click="openQuizModal">
			<i class="fas fa-plus"></i>
			Complete the quiz
		</button>
		<b-modal ref="modalQuiz" size="xl" hide-footer title="Quiz">
			<keep-alive>
				<transition name="fade" mode="out-in" appear>
					<component v-bind:is="currentComponent"></component>
				</transition>
			</keep-alive>
			<div class="form-group mt-3 mb-0">
				<div class="row border-top pt-3 pl-3">
					<button class="btn btn-secondary mr-2" :disabled="backDisabled" @click="prev">
						<i class="fas fa-arrow-left"></i>
						Back
					</button>
					<button class="btn btn-success mr-2" :disabled="nextDisabled" @click="next">
						Next
						<i class="fas fa-arrow-right"></i>
					</button>
					<button class="btn btn-secondary" @click="closeQuizModal">
						<i class="fas fa-times"></i>
						Close
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
		}
	},
	created() {
		this.registerStoreModule("HsQuiz", HsQuizModule);
		this.registerStoreModule("HsCategories", HsCategoriesModule);
		this.$store.dispatch("HsCategories/apiGetCategories");
	},
	computed: {
		currentComponent() {
			return this.$store.getters['HsQuiz/currentComponent'];
		},
		backDisabled() {
			return this.$store.getters['HsQuiz/isFirstComponent'];
		},
		nextDisabled() {
			return !this.$store.getters['HsQuiz/hasNextComponent'];
		},
		isLoading() {
			return this.$store.state.HsQuiz.isLoading;
		},
		curEl() {
			return this.$children.find(
				c => c.$options._componentTag === this.currentComponent
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
		},
		closeQuizModal() {
			this.$refs.modalQuiz.hide();
		}
	}
};
</script>