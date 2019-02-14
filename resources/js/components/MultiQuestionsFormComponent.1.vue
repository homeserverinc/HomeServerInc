<template>
    <div>
        <div v-if="tree.length > 0">
            <div v-for="(node, index) in tree" :key="index">
                <tree :tree-data="node" @node-click="doOnNodeClick"></tree>
            </div>
        </div>
        <div v-else>
            <div class="container-fluid" style="margin-top: 15px;">
                <button 
                    class="btn btn-success"
                    @click="addFirstQuestionClick">
                    <i class="fas fa-plus"></i>
                    Add the first Question
                </button>
            </div>
        </div>
        <b-modal 
            id="modalFormAdd" 
            ref="modalFormAdd" 
            :title="modalTitle"
            @ok="handleAddOk">
            <div class="form-group">
                <label for="parent">Parent</label>
                <input type="text" name="parent" id="parent" class="form-control" disabled :value="activeNode.text">
                <input type="hidden" name="parent_uuid" value="">
            </div>
            <div class="card">
                <div class="card-header">
                    Type
                </div>
                <div class="card-body">
                    <div class="row">
                        <div class="col col-sm-6">
                            <div class="custom-control custom-radio">
                                <input 
                                    type="radio" 
                                    id="nodeTypeCheckbox" 
                                    name="nodeType" 
                                    class="custom-control-input"
                                    v-model="newNode.qaType"
                                    :value="1"
                                    >

                                <label class="custom-control-label" for="nodeTypeCheckbox">Checkbox</label>
                            </div>
                        </div>
                        <div class="col col-sm-6">
                            <div class="custom-control custom-radio">
                                <input 
                                    type="radio" 
                                    id="nodeTypeCheckboxText" 
                                    name="nodeType" 
                                    class="custom-control-input"
                                    v-model="newNode.qaType"
                                    :value="2"
                                    >
                                <label class="custom-control-label" for="nodeTypeCheckboxText">Checkbox/Text</label>
                            </div>
                        </div>
                        <div class="col col-sm-6">
                            <div class="custom-control custom-radio">
                                <input 
                                    type="radio" 
                                    id="nodeTypeRadio" 
                                    name="nodeType" 
                                    class="custom-control-input"
                                    v-model="newNode.qaType"
                                    :value="3">
                                <label class="custom-control-label" for="nodeTypeRadio">Radio Button</label>
                            </div>
                        </div>
                        <div class="col col-sm-6">
                            <div class="custom-control custom-radio">
                                <input 
                                    type="radio" 
                                    id="nodeTypeRadioText" 
                                    name="nodeType" 
                                    class="custom-control-input"
                                    v-model="newNode.qaType"
                                    :value="4">
                                <label class="custom-control-label" for="nodeTypeRadioText">Radio Button/Text</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="form-group">
                <label for="nodeText">Text</label>
                <input 
                    type="text" 
                    name="nodeText" 
                    id="nodeText" 
                    class="form-control"
                    v-model="newNode.text">
            </div>
        </b-modal>
        <b-modal id="modalFormEdit" ref="modalFormEdit" title="Bootstrap-Vue">
            <p class="my-4">Hello from modal!</p>
        </b-modal>
    </div>
</template>

<style>
    .fill-questions {
        min-height: 100vh;
    }
    .form-container {
        position: fixed;
        bottom: 0px;
        width: 100%;
    }
    .outside-border {
        border: 1px solid rgba(0, 0, 0, 0.125) !important;
        border-radius: 0px;
    }
    .borderless {
        border-bottom: 0 none !important;
        border-right: 0 none !important;
        border-radius: 0px;
    }
    .question {
        padding: 0.45rem !important;
    }
    .question-body {
        padding: 0 0 0 0.50rem !important;
    }
    .answer {
        padding: 0.35rem !important;
    }
    .answer-body {
        padding: 0 0 0 0.50rem !important;
    }
    .scrollable {
        min-height: 100vh;
        overflow-y: scroll;
    }
</style>


<script>


import Tree from './tree/Tree.vue';
import bModal from 'bootstrap-vue/es/components/modal/modal';
import bModalDirective from 'bootstrap-vue/es/directives/modal/modal';
import {LOCAL_URLS} from '../configs.js';

export default {
    data() {
        return {
            'tree': [],
            'activeNode': {
                'text': '',
                'uuid': '',
                'qaType': '',
                'nodeType' : 'question',
                'children': []
            },
            'actionName': '',
            'newNode': {
                'text': '',
                'uuid': '',
                'qaType': '',
                'nodeType' : '',
                'children': []
            }
        }
    },
    computed: {
        modalTitle: function () {
            if (this.activeNode == null) {
                return ''
            } else if (this.activeNode.nodeType == 'question') {
                return this.actionName+'Answer.';
            } else {
                return this.actionName+'Question.';
            }
        }
    },
    components: {
        'Tree': Tree,
        'b-modal': bModal
    },
    directives: {
        'b-modal': bModalDirective
    },
    mounted() {
        console.log(LOCAL_URLS.QUESTION.CREATE);
    },
    updated() {
       $(this.$refs.nodeType).selectpicker('refresh');
    },
    methods: {
        doOnNodeClick(node) {
            this.activeNode = node;
            this.actionName = 'Add new ';
            this.$refs.modalFormAdd.show();
        },
        handleAddOk(event) {
            axios.post(LOCAL_URLS.QUESTION.CREATE,
                this.newNode)
                .then((res) => {
                    console.log(res);
                })
        },
        addFirstQuestionClick() {
            this.$refs.modalFormAdd.show();
        }
    }    
}
</script>
