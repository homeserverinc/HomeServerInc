<template>
  <li 
    class="list-group-item list-group-item-action"
    :class="{
        'list-group-item-secondary': (node.type == 'question'),
        'list-group-item-light': (node.type == 'answer')
    }">
        <div>
            <div class="card-body text-left node-padding">
                {{ node.text }}  
                <span 
                    class="badge" 
                    :class="{
                        'badge-light': (node.type == 'question'),
                        'badge-secondary': (node.type == 'answer')
                    }">
                    {{nodeTypeText()}}
                </span>
                <div class="float-right">
                    <button 
                        class="btn btn-sm btn-success" 
                        id="btn-1" @click="handleClickAdd(node)"
                        data-toggle="tooltip" 
                        data-placement="top" 
                        :title="(node.type == 'question') ? 'Add new Answer' : 'Add new Question'"
                        :disabled="(node.type == 'answer' && node.children.length > 0)">
                        <i class="fas fa-plus"></i>
                    </button>
                    <span style="width:3em;"></span>
                    <button 
                        class="btn btn-sm btn-warning" 
                        data-toggle="tooltip" 
                        data-placement="top"
                        :title="(node.type == 'question') ? 'Edit this Question' : 'Edit this Answer'"
                        id="btn-2" @click="handleClickEdit(node)">
                        <i class="fas fa-edit"></i>
                    </button> 
                    <span style="width:3em;" v-if="(node.type == 'question')"> </span>
                    <button 
                        class="btn btn-sm btn-primary" 
                        id="btn-3" 
                        data-toggle="tooltip" 
                        data-placement="top"
                        title="Copy this Question"
                        v-if="(node.type == 'question')" 
                        @click="handleClickCopy(node)">
                        <i class="fas fa-copy"></i>
                    </button> 
                    <span style="width:3em;" v-if="(node.type == 'answer')"> </span>
                    <button 
                        class="btn btn-sm btn-secondary" 
                        id="btn-4" 
                        data-toggle="tooltip" 
                        data-placement="top"
                        title="Paste Question"
                        v-if="(node.type == 'answer')" 
                        @click="handleClickPaste(node)">
                        <i class="fas fa-paste"></i>
                    </button> 
                    <span style="width:3em;"> </span>
                    <button 
                        class="btn btn-sm btn-danger" 
                        id="btn-5" 
                        data-toggle="tooltip" 
                        data-placement="top"
                        :title="(node.type == 'question') ? 'Delete this Question' : 'Delete this Answer'"
                        @click="handleClickDel(node)">
                        <i class="fas fa-trash"></i>
                    </button> 
                </div>
            </div>
            <ul 
                v-if="node.children && node.children.length" 
                class="list-group"
                style="margin-bottom: 0px !important"
                :class="{
                    'question-bottom-border': (node.type == 'question'),
                    'answer-bottom-border': (node.type == 'answer')
                }">
                <node v-for="(child, index) in node.children" :node="child" :key="index" 
                    :handle-click-add="handleClickAdd" 
                    :handle-click-del="handleClickDel"
                    :handle-click-edit="handleClickEdit"
                    :handle-click-copy="handleClickCopy"
                    :handle-click-paste="handleClickPaste">
                </node>
            </ul>
        </div>
  </li>
</template>

<style>
    .node-padding {
        padding: 0.35rem 1.25rem 0.65rem 0rem !important;
    }
</style>


<script>
export default {
    name: "node",
    props: {
        node: Object,
        handleClickAdd: Function,
        handleClickEdit: Function,
        handleClickDel: Function,
        handleClickCopy: Function,
        handleClickPaste: Function
    },
    methods: {
        nodeTypeText() {
            if (this.node.type == 'answer') {
                switch (this.node.controlType) {
                    case 1:
                        return 'Checkbox';
                        break;
                    case 2:
                        return 'Checkbox/Text';
                        break;
                    case 3:
                        return 'Radio Buttom';
                        break;
                    default:
                        return 'Radio Buttom/Text';
                        break;
                }
            } else {
                switch (this.node.questionType) {
                    case 1:
                        return 'Single Choice';
                        break;
                
                    default:
                        return 'Multiple Choices';
                        break;
                }
            }
        }
    }
};
</script>