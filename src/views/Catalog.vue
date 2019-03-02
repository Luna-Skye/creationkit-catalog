<template>
<div id="catalog">
    <CatalogNavigation></CatalogNavigation>
    <CatalogResults></CatalogResults>
    <CatalogPreview></CatalogPreview>
    <CatalogInformation></CatalogInformation>
</div>
</template>

<script>
import CatalogNavigation from '@/components/CatalogNavigation.vue'
import CatalogResults from '@/components/CatalogResults.vue'
import CatalogPreview from '@/components/CatalogPreview.vue'
import CatalogInformation from '@/components/CatalogInformation.vue'

export default {
    components: {
        CatalogNavigation,
        CatalogResults,
        CatalogPreview,
        CatalogInformation
    }
}
</script>

<style lang="scss">
#catalog {
    display: grid;
    grid-template-columns: 460px 460px auto;
    grid-template-rows: auto 420px;
    grid-gap: 32px;
    
    height: 100vh;
    margin: 0 32px;
    box-sizing: border-box;
    
    .catalog-navigation,
    .catalog-results {
        grid-row: span 2;
        > .header {
            font-size: 24px;
            > .title {
                color: $color-white;
                text-decoration: none;
                padding: 16px;
                display: block;
                
                &.-pointer:hover {
                    text-shadow: 0 0 64px rgba($color-white, 0.8);
                }
            }
        }
    }
}
</style>
