<template>
    <div>
        <div class="form-group">
            <input
                type="hidden"
                name="category_validate"
                v-model="category_validate"
                v-validate="'required'"
            >
            <label class="form-control-label hs-label" for="selectCategory">What service do you need?</label>
            <select
                ref="selectCategory"
                v-model="category"
                class="form-control selectpicker"
                data-style="btn-secondary"
                data-live-search="true"
                name="selectCategory"
                id="selectCategory"
                :class="{'is-invalid': errors.has('category_validate')}"
            >
                <option selected="selected" :value="null">Nothing Selected</option>
                <option
                    v-for="(category, index) in categories"
                    :key="index"
                    :value="category.uuid"
                >{{ category.category }}</option>
            </select>
            <div class="invalid-feedback">{{ errors.first('category_validate') }}</div>
        </div>
    </div>
</template>


<script>
import { Validator } from "vee-validate";

const dictionary = {
    en: {
        attributes: {
            category_validate: "Service",
        }
    }
};

Validator.localize(dictionary);

export default {
    computed: {
        categories() {
            return this.$store.state.HsCategories.categories;
        },
        category: {
            get() {
                if (this.$store.state.HsCategories.category === undefined) {
                    return null
                } else {
                    return this.$store.state.HsCategories.category.uuid;
                }
            },
            set(value) {
                return this.$store.dispatch("HsCategories/selectCategory", value);
            }
        },
        category_validate() {
            return this.category;
        }
    },
    updated() {
        $(this.$refs.selectCategory).selectpicker('refresh');
        $(this.$refs.selectCategory).selectpicker('render');
	}
};
</script>
