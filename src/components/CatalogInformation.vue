<template>
<div class="catalog-information">
	<EdgeFlare class="-top -left" />
	<EdgeFlare class="-top -right" />
	<EdgeFlare class="-bottom -left" />
	<EdgeFlare class="-bottom -right" />
</div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss">
.catalog-information {
    background: rgba($color-black, 0.8);
	border: 2px solid $color-white;
	margin-bottom: 32px;
	
	position: relative;
	
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
}
</style>
