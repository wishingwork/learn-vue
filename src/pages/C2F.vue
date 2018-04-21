<template>
	<div class="container">
		<h2>Fahrenheit: {{celsius * 9 / 5 + 32}} 'F</h2>
		<h2>Fahrenheit: {{ fahrenheit }} 'F</h2>
		<div class="celsius">
			Celsius: <input type="number" v-model="celsius" />
		</div>
	</div>
</template>
<script>
export default{
	data () {
		return {
			celsius: 0
		}
	},
	computed: {
		fahrenheit () {
			return this.celsius * 9 / 5 + 32
		}
	}
}
</script>
<style>
	.celsius {
		font-size: 1.5em;
	}
</style>