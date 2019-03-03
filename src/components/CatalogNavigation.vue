<template>
<div class="catalog-navigation">
	<div class="header -grid">
        <router-link to="/" class="title -pointer">SKYRIM CK CATALOG</router-link>
        
        <Icon icon="cog" class="-pointer" @click.native="openSettings = true" />
    </div>
    <Breadcrumbs />
</div>
</template>

<script>
import Breadcrumbs from '@/components/Breadcrumbs.vue'

export default {
    components: { Breadcrumbs },
    data() {
        return {
            openSettings: false
        }
    }
}
</script>

<style lang="scss">
.catalog-navigation {
    background: rgba($color-black, 0.8);
    border-left: 2px solid $color-white;
    border-right: 2px solid $color-white;
    
    .header.-grid {
        display: grid;
        grid-template-columns: auto 56px;
        align-items: center;
        .uil { padding: 16px; }
    }
}
</style>
