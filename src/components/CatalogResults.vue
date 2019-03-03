<template>
<div class="catalog-results">
	<div class="header">
        <p class="title">RESULTS</p>
    </div>
    <p class="counter">222 Results</p>
</div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
.catalog-results {
    background: rgba($color-black, 0.8);
    border-left: 2px solid $color-white;
    border-right: 2px solid $color-white;
    
    .counter {
        color: rgba($color-white, 0.8);
        margin: 0;
        padding: 8px 16px;
        border-bottom: 2px solid rgba($color-white, 0.5);
    }
}
</style>
