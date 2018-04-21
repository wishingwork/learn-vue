<template>
	<div class="container">
		<h1>Temperature Conversion</h1>
		<input id="toggleTemperature" type="checkbox" v-model="isCelsius">
		<label for="toggleTemperature">Switch: {{toggleTemperature}}</label>

		<h2 v-if="isCelsius">Celsius: {{ celsius }} 'C</h2>
		<h2 v-if="!isCelsius">Fahrenheit: {{ fahrenheit }} 'F</h2>

		<div class="celsius">
			<span v-show="!isCelsius">Celsius: </span>
			<span v-show="isCelsius">Fahrenheit: </span>
			<input type="number" v-model="userInput" /> 'C
		</div>

		<button @click="temperatureConversio( userInput );">
			Temperature Conversio
		</button>
	</div>
</template>
<script>
export default{
	data () {
		return {
			userInput: 0,
			isCelsius: false,
		}
	},
	computed: {
		fahrenheit () {
			return this.userInput * 9 / 5 + 32;
		},
		celsius () {
			return (this.userInput - 32) * 5 / 9;
		},
		toggleTemperature (val) {
			return this.isCelsius ? "C to F" : "F to C";
		}
	},
	methods: {
		temperatureConversio (val) {
			if (this.isCelsius) {
				alert('Celsius: ' + this.celsius);
			} else {
				alert('Fahrenheit: ' + this.fahrenheit);
			}
		}
	}
}
</script>
<style>
	.celsius {
		font-size: 30px;
	}
</style>