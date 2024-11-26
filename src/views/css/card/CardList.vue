<template>
    <div class="card-list">
        <div class="cards">
            <div v-for="card in displayedCards" :key="card.id" class="card" @click="goToCard(card)">
                <h2>{{ card.name }}</h2>
                <p>{{ card.description }}</p>
            </div>
        </div>
        <el-pagination background layout="prev, pager, next" :total="totalItems" :page-size="itemsPerPage"
            :current-page="currentPage" @current-change="handlePageChange" />
    </div>

    <CardContent ref="CardContentRef" />
</template>

<script setup lang="ts">
import { ref, computed, onMounted, defineAsyncComponent } from 'vue';
import { provide } from 'vue';
import { ElPagination } from 'element-plus';
import { useCardsOpt } from './opt';
const CardContent = defineAsyncComponent(() => import('./CardContent.vue'))

const { cards } = useCardsOpt();

const currentPage = ref(1);
const itemsPerPage = 5;

const totalItems = computed(() => cards.length);
const totalPages = computed(() => Math.ceil(totalItems.value / itemsPerPage));

const displayedCards = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return cards.slice(start, end);
});

const CardContentRef = ref()
const goToCard = (cardObj: any) => {
    CardContentRef.value.openDialog(cardObj)
};

const handlePageChange = (newPage: number) => {
    currentPage.value = newPage;
};

provide('cards', cards);
</script>

<style scoped>
.card-list {
    width: 100%;
    height: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;
}

.cards {
    flex: 1;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}

.card {
    max-height: 100px;
    background-color: #f0f0f0;
    padding: 20px;
    border-radius: 8px;
    cursor: pointer;
    transition: transform 0.3s;
}

.card:hover {
    transform: scale(1.05);
}

.el-pagination {
    flex-shrink: 0;
    margin-top: 20px;
    margin-left: auto;
    text-align: center;
}
</style>