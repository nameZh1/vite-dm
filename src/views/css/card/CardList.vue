<template>
    <div class="card-list">
        <el-badge v-for="(item, index) in filterList" :key="index" :value="item.count" class="item">
            <el-button text>#{{ item.label }}</el-button>
        </el-badge>
        <div class="cards">
            <div v-for="(card, index) in displayedCards" :key="'card' + index" class="card" @click="goToCard(card)">
                <h3>{{ card.name }}</h3>
                <!-- <el-tooltip effect="dark" :content="card.description" placement="bottom-start"> -->
                <p>{{ card.description }}</p>
                <!-- </el-tooltip> -->
                <el-row class="mt10">
                    <span :class="{ 'card-from1': card.from == 'net', 'card-from2': card.from !== 'net', 'mr10': true }"
                        @click.stop="filterHandle(card.from, 'from')">{{
                            card.from
                                ==
                                'net' ? '网络' : '非网络' }}</span>
                    <el-tooltip v-for="(at, atIndex) in card.author" :key="'at' + atIndex" effect="dark"
                        :content="'作者:' + at" placement="bottom-start">
                        <div class="ellipsis card-author mr10" @click.stop="filterHandle(at, 'author')">{{ at }}</div>
                    </el-tooltip>
                </el-row>

            </div>
        </div>
        <el-pagination background layout="sizes, prev, pager, next" :total="totalItems" v-model:page-size="itemsPerPage"
            v-model:current-page="currentPage" @current-change="handlePageChange" @size-change="handleSizeChange" />
    </div>

    <CardContent ref="CardContentRef" />
</template>

<script setup lang="ts">
import { ref, computed, onMounted, defineAsyncComponent } from 'vue';
import { provide } from 'vue';
import { ElPagination } from 'element-plus';
import { useCardsOpt } from './opt';
import { fromType } from './types';
const CardContent = defineAsyncComponent(() => import('./CardContent.vue'))

const { cards, dictMap } = useCardsOpt();

const currentPage = ref(1);
const itemsPerPage = ref(10);

const totalItems = computed(() => cards.length);
const totalPages = computed(() => Math.ceil(totalItems.value / itemsPerPage.value));

const displayedCards = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage.value;
    const end = start + itemsPerPage.value;
    return cards.slice(start, end);
});

const CardContentRef = ref()
const goToCard = (cardObj: any) => {
    CardContentRef.value.openDialog(cardObj)
};

const handlePageChange = (newPage: number) => {
    currentPage.value = newPage;
};
const handleSizeChange = (newPage: number) => {
    itemsPerPage.value = newPage;
};

provide('cards', cards);

/**
 * 筛选
 * @param value 
 * @param key 
 */
const filterList = ref({} as any)

const filterHandle = (value: any | fromType, key: string) => {

    let cout = 0
    cards.forEach(card => {
        if (key == 'from') {
            if (card.from == value) {
                cout++;
            }
        } else {
            if (card.author.includes(value)) {
                cout++;
            }
        }
    })

    if (key == 'from') {
        filterList.value[value] = {
            key: key,
            label: dictMap[value as fromType],
            value: value,
            count: cout
        }
    } else {
        filterList.value[value] = {
            key: key,
            label: value,
            value: value,
            count: cout
        }
    }


}

</script>

<style lang="scss" scoped>
.card-list {
    width: 100%;
    height: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;

    .cards {
        flex: 1;
        display: flex;
        flex-wrap: wrap;
        align-content: flex-start;
        gap: 20px;

        .card {
            height: 140px;
            background-color: #f0f0f0;
            padding: 10px;
            border-radius: 8px;
            cursor: pointer;
            transition: transform 0.3s;
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            &:hover {
                transform: scale(1.05);
            }

            &-author {
                max-width: 100px;
                width: auto;
                padding: 5px;
                border-radius: 6px;
                background: #ffcd44;
            }

            &-from1 {
                display: inline;
                padding: 5px;
                border-radius: 6px;
                background: #ff6044;
                color: #fff;
            }

            &-from2 {
                display: inline;
                padding: 5px;
                border-radius: 6px;
                background: #53baff;
                color: #fff;
            }

        }
    }
}

.card .el-pagination {
    flex-shrink: 0;
    margin-top: 20px;
    margin-left: auto;
    text-align: center;
}

.ellipsis {
    white-space: nowrap;
    /* 防止文本换行 */
    overflow: hidden;
    /* 隐藏溢出的内容 */
    text-overflow: ellipsis;
    /* 使用省略号表示被隐藏的内容 */
}
</style>