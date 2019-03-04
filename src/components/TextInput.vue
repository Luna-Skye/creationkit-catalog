<template>
<div class="input" :class="[`-${edge}edge`]">
    <EdgeFlare
        v-if="edge === 'left' || edge === 'both'"
        class="-left"
    />
    <EdgeFlare
        v-if="edge === 'right' || edge === 'both'"
        class="-right"
    />
    
	<input
        type="text"
        :placeholder="placeholder"
        :value="value"
        @input="$emit('input', $event.target.value)"
    >
</div>
</template>

<script>
export default {
    props: {
        value: {
            type: String,
            default: ''
        },
        placeholder: {
            type: String,
            default: ''
        },
        edge: {
            type: String,
            default: ''
        }
    }
}
</script>

<style lang="scss">
.input {
    position: relative;
    
    &.-leftedge {
        padding-left: 34px;
        input:focus { background: linear-gradient(-90deg, rgba($color-white, 0.1), transparent); }
    }
    &.-rightedge {
        padding-right: 34px;
        input:focus { background: linear-gradient(90deg, rgba($color-white, 0.1), transparent); }
    }
    &.-bothedge {
        padding: 0 34px;
        input:focus { background: linear-gradient(90deg, transparent, rgba($color-white, 0.1), transparent); }
    }
    
    .edge-flare { top: -6px; }
    .edge-flare.-left { left: 0; }
    .edge-flare.-right { right: 0; transform: rotate(180deg); }
    
	input {
        background: rgba($color-black, 0.8);
        border: none;
        color: $color-white;
        font-size: 18px;
        padding: 8px 24px;
        border-bottom: 2px solid $color-white;
        border-top: 2px solid $color-white;
        width: calc(100% - 48px);
        
        &:focus { outline: none; }
    }
}
</style>
