<template>
<div class="popover">
	<EdgeFlare v-if="edge.includes('topleft')" class="-top -left" />
	<EdgeFlare v-if="edge.includes('topright')" class="-top -right" />
	<EdgeFlare v-if="edge.includes('bottomleft')" class="-bottom -left" />
	<EdgeFlare v-if="edge.includes('bottomright')" class="-bottom -right" />
	
	<slot />
</div>
</template>

<script>
export default {
    props: {
		edge: {
			type: Array,
			default: []
		}
	}
}
</script>

<style lang="scss">
.popover {
	background: rgba($color-black, 0.8);
	min-width: 320px;
	min-height: 100px;
	padding-bottom: 16px;
	position: absolute;
	border: 2px solid $color-white;
	
	.edge-flare {
		&.-top { top: -19px; }
		&.-bottom { bottom: -19px; }
		&.-left { left: -19px; }
		&.-right { right: -19px; }
		
		&.-top.-left { transform: rotate(45deg); }
		&.-top.-right { transform: rotate(135deg); }
		&.-bottom.-left { transform: rotate(-45deg); }
		&.-bottom.-right { transform: rotate(-135deg); }
	}
	
	.title {
		color: $color-white;
		text-decoration: none;
		padding: 16px;
		margin: 0;
		display: block;
		font-size: 24px;
	}
	
	.subtitle {
		color: $color-white;
		text-decoration: none;
		padding: 16px;
		margin: 0;
		display: block;
		font-size: 18px;
	}
}
</style>
