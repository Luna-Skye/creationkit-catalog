<template>
<div class="catalog-navigation">
	<div class="header -grid">
        <router-link to="/" class="title -pointer">SKYRIM CK CATALOG</router-link>
        
        <Icon icon="cog" class="-pointer" @click.native="openSettings = true" />
        <Popover v-if="openSettings" :edge="['topright']">
            <!-- GENERAL SETTINGS -->
            <p class="title">SETTINGS</p>
            <Checkbox
                v-model="$store.state.readableNames"
                label="Readable Object Names"
            />
            <Checkbox
                v-model="$store.state.customCursors"
                label="Custom Cursors"
            />
            
            <!-- ESM SETTINGS -->
            <p class="subtitle">ESMs</p>
            <Checkbox
                v-model="$store.state.esmSkyrim"
                label="Skyrim.esm"
            />
            <Checkbox
                v-model="$store.state.esmHearthfire"
                label="Hearthfire.esm" class="disabled"
            />
            <Checkbox
                v-model="$store.state.esmDragonborn"
                label="Dragonborn.esm" class="disabled"
            />
            <Checkbox
                v-model="$store.state.esmDawnguard"
                label="Dawnguard.esm" class="disabled"
            />
        </Popover>
    </div>
	
    <Breadcrumbs />
</div>
</template>

<script>
import Breadcrumbs from '@/components/Breadcrumbs.vue'
import Checkbox from '@/components/Checkbox.vue'

export default {
    components: { Breadcrumbs, Checkbox },
    data() {
        return {
            openSettings: false,
            checkbox: false
        }
    }
}
</script>

<style lang="scss">
.catalog-navigation {
    background: rgba($color-black, 0.8);
    border-left: 2px solid $color-white;
    border-right: 2px solid $color-white;
    
    > .header.-grid {
        position: relative;
        
        display: grid;
        grid-template-columns: auto 56px;
        align-items: center;
        .uil { padding: 16px; }
        
        .popover {
            width: 404px;
            top: 26px;
            right: 24px;
        }
    }
}
</style>
