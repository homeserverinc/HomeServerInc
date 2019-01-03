<template>
    <div>
        <div>
            <ul class="list-group">
                <node-tree 
                    :node="treeData" 
                    :handle-click-add="this.handleClickAdd" 
                    :handle-click-edit="this.handleClickEdit"
                    :handle-click-del="this.handleClickDel" 
                    :handle-click-copy="this.handleClickCopy" 
                    :handle-click-paste="this.handleClickPaste">
                </node-tree>
            </ul>
        </div>

    </div>
</template>

<script>
import NodeTree from "./NodeTree";

export default {
    props: {
        treeData: Object
    },
    components: {
        NodeTree
    },
    methods: {
        handleClickAdd (node) {
            this.$emit('node-click-add', node);
        },
        handleClickEdit(node) {
            this.$emit('node-click-edit', node);
        },
        handleClickDel(node) {
            this.$emit('node-click-del', node);
        },
        handleClickCopy(node) {
            this.$emit('node-click-copy', node);
        },
        handleClickPaste(node) {
            this.$emit('node-click-paste', node);
        }
    }
};
</script>

<style>
.tree {
    background-color: rgb(122, 165, 190);
}
.list-group {
    border-bottom: 0 none !important;
    border-right: 0 none !important;
    border-radius: 0px !important;
}
.btn-outline-secondary {
    border: none !important;
    border-radius: 0 !important;
}
.list-group-item {
    margin-bottom: 2px;
    padding: 0 0 0 0.55rem !important;
    border: 0 none !important;
    border-radius: 0px !important; 
}
.outside-border {
    border-bottom: 0.55rem solid rgba(0, 0, 0, 0.125) !important;
    border-radius: 0px;
}
.question-bottom-border {
    border-bottom: 0.55rem solid #d6d8db !important;
}
.answer-bottom-border {
    border-bottom: 0.55rem solid rgba(255, 255, 255, 0.125) !important;
}
</style>