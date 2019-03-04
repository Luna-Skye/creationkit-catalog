<template>
<div class="catalog-results">
	<div class="header -grid">
        <p class="title">RESULTS</p>
        <TextInput placeholder="FILTER" v-model="filter" edge="left" />
    </div>
    <p class="counter">222 Results</p>
	
</div>
</template>

<script>
import TextInput from '@/components/TextInput.vue'
export default {
    components: { TextInput },
    data() {
        return {
            filter: ''
        }
    }
}
</script>

<style lang="scss">
.catalog-results {
    background: rgba($color-black, 0.8);
    border-left: 2px solid $color-white;
    border-right: 2px solid $color-white;
    
    .header.-grid {
        display: grid;
        grid-template-columns: auto 260px;
        align-items: center;
    }
    
    .counter {
        color: rgba($color-white, 0.8);
        margin: 0;
        padding: 8px 16px;
        border-bottom: 2px solid rgba($color-white, 0.5);
    }
}
</style>
