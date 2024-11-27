<template>
    <el-dialog v-model="dialogTableVisible" :title="card?.name" width="80%" v-loading="loading" fullscreen>
        <div class="card-content">
            <template v-if="card">
                <div class="demo-container">
                    <div v-html="compiledContent" class="demo"></div>
                </div>
                <el-collapse v-model="activeNames">
                    <el-collapse-item title="源码" name="1">
                        <div class="code-editor">
                            <el-row :gutter="12">
                                <el-col :span="12">
                                    <el-form-item label="CSS">
                                        <codemirror v-model="css" :options="cmOptionsCSS" placeholder="请输入CSS代码">
                                        </codemirror>
                                    </el-form-item>
                                </el-col>
                                <el-col :span="12">
                                    <el-form-item label="HTML5">
                                        <codemirror v-model="content" :options="cmOptionsHTML" placeholder="请输入HTML内容">
                                        </codemirror>
                                    </el-form-item>
                                </el-col>
                            </el-row>
                            <!-- <el-button type="primary" @click="runCode" style="margin-top: 10px;">运行</el-button> -->
                        </div>
                    </el-collapse-item>
                </el-collapse>
            </template>
            <div v-else>
                <p>卡片未找到</p>
            </div>
        </div>
    </el-dialog>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue';
import { Card } from './types';
import { Codemirror } from 'vue-codemirror';
// import 'codemirror/lib/codemirror.css';
// import 'codemirror/theme/monokai.css';
// import 'codemirror/mode/css/css.js';
// import 'codemirror/mode/htmlmixed/htmlmixed.js';

// 弹框相关
const dialogTableVisible = ref(false);
const loading = ref(false);

// 卡片对象
const card = ref<Card | null>(null);
const content = ref('');
const css = ref('');

const activeNames = ref([]);

const cmOptionsCSS = {
    mode: 'text/css',
    theme: 'monokai',
    lineNumbers: true,
    lint: true
};

const cmOptionsHTML = {
    mode: 'text/html',
    theme: 'monokai',
    lineNumbers: true,
    lint: true
};

const compiledContent = computed(() => {
    return `<style>${css.value}</style>${content.value}`;
});

const runCode = () => {
    content.value = content.value;
    css.value = css.value;
};

// 打开弹框
const openDialog = (cardObj: Card) => {
    card.value = cardObj;
    content.value = cardObj.content || '';
    css.value = cardObj.css || '';
    dialogTableVisible.value = true;
    loading.value = true;

    setTimeout(() => { loading.value = false }, 500);
};

defineExpose({
    openDialog
});
</script>

<style scoped lang="scss">
.card-content {
    max-height: 85vh;
    // width: 100%;
    overflow: auto;
    margin: 0 auto;
    padding: 0 10px;
}

.demo-container {
    margin-top: 20px;
    border: 1px solid #ccc;
    padding: 20px;
    border-radius: 8px;
}

.code-editor {
    margin-top: 20px;

    .input-group {
        margin-bottom: 10px;
    }

    .CodeMirror {
        height: 300px;
    }
}
</style>
<style>
.cm-scroller {
    width: 500px;
}
</style>