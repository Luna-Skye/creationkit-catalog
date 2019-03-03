<template>
<ul class="breadcrumbs">
	<li><a href="#" class="-pointer">World Objects</a></li>
	<li><a href="#" class="-pointer">Static</a></li>
	<li><a href="#" class="-pointer">Architecture</a></li>
	<li>WhiteRun</li>
</ul>
</template>

<script>
export default {
    props: {
		path: {
			type: String,
			default: ''
		}
	}
}
</script>

<style lang="scss">
.breadcrumbs {
	list-style: none;
	padding: 8px 16px;
	margin: 0;
	border-bottom: 2px solid rgba($color-white, 0.5);
	
	li {
		display: inline;
		font-size: 14px;
		color: $color-white;
		
		&+li:before {
			content: "/\00a0";
			color: rgba($color-white, 0.8);
			padding: 8px;
		}
		
		a { color: rgba($color-white, 0.8); }
		a:hover { color: $color-white; }
	}
}
</style>
