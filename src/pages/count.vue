<template>
	<div class="container">
		<h2>count: <span class="count">{{ count }}</span></h2>
		<button @click="actionIncrease"> + </button>
		<button @click="actionDecrease"> - </button>

		Set number:
		<input type="number" v-model="num" style="width:50px;"><br/>
		<button @click="actionIncrease(num)">+{{num}}</button>
		<button @click="actionDecrease(num)">-{{num}}</button>
		<button @click="actionCountReset">Reset</button>
	</div>
</template>
<script>
import {mapGetters, mapActions } from 'vuex'
export default{
	data () {
		return {
			num: 1
		}
	},
	computed: {
		...mapGetters({
			count: 'getCount',
		}),
	},
	methods: {
		...mapActions([
			'actionIncrease',
			'actionDecrease',
			'actionCountReset'
		]),
		callAction() {
			this.actionIncrease;
		}
	}
}
</script>
<style>
	.celsius {
		font-size: 1.5em;
	}
</style>