<template>
<div class="checkbox">
	<div class="switch">
		<input
			:id="label.replace(' ', '')"
			class="input"
			:checked="value"
			type="checkbox"
			@change="$emit('input', $event.target.checked)"
		>
		
		<img v-if="value" src="../assets/checkbox_checked.svg">
		<img v-if="!value" src="../assets/checkbox_unchecked.svg">
		
		<label :for="label.replace(' ', '')" class="label -pointer">{{ label }}</label>
	</div>
</div>
</template>

<script>
export default {
	props: {
		value: {
			type: Boolean,
			default: true
		},
		label: {
			type: String,
			default: 'Checkbox'
		}
	}
}
</script>

<style lang="scss">
.checkbox {
	> .switch {
    	position: relative;
		
		> .input { display: none; }
		
		img {
			position: absolute;
			top: 8px;
			left: 16px;
		}
		
    	> .label {
			display: block;
    		font-size: 14px;
			color: $color-white;
			padding: 12px;
			padding-left: 48px;
			
			&:hover {
				background: linear-gradient(90deg, rgba($color-white, 0.1), transparent);
			}
    	}
    }
}
</style>
