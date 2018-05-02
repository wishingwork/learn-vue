<template>
	<div class="container">
		<nav class="navbar navbar-default">
			<div class="container-fluid">
				<div class="navbar-header">
					<button type="button" class="collapsed navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-5" aria-expanded="false">
						<span class="sr-only">Toggle navigation</span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
						<span class="icon-bar"></span>
					</button>
					<a href="#" class="navbar-brand">Shopping Cart</a>
				</div>
				<div class="collapse navbar-collapse navbar-right">
					<router-link :to="{name: 'cart'}" class="btn navbar-btn">
						<span class="glyphicon glyphicon-shopping-cart" aria-hidden="true"></span>
						<span class="badge">{{ cartTotal }}</span>
					</router-link>
				</div>
			</div>
		</nav>
		<!-- recommended product -->
		<div class="recommend">
			<div class="row">
				<div class="col-md-3">
					<img :src="recommend.image" style="width: 100%" />
				</div>
				<div class="col-md-9">
					<div class="recommend-info">
						<h2>{{ recommend.title }}</h2>
						<hr>
						<h3>ust some random text, lorem ipsum text praesent tincidunt ipsum lipsum. Just some random text, Once again, some random text to lorem lorem lorem lorem ipsum text praesent tincidunt ipsum lipsum. </h3>
						<h2>${{ recommend.price }}</h2>
						<button
							class="btn btn-danger"
							@click="addCart( recommend.title )">
							<span class="glyphicon glyphicon-shopping-cart" aria-hidden="true">Add</span>
						</button>
					</div>
				</div>
			</div>
		</div>
		<div class="panel panel-default">
			<div class="panel-heading panel-price">Total: <span>${{ total }}</span></div>
			<table class="table">
				<thead>
					<tr>
						<th>Item</th>
						<th>Price</th>
						<th>Name</th>
						<th>Cancel</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="(cart, index) in cartList">
						<td>{{ index + 1 }}</td>
						<td>{{ cart.price }}</td>
						<td>{{ cart.title }}</td>
						<td>
							<button 
								class="btn btn-default btn-xs glyphicon glyphicon-remove"
								@click="cancelCart(cart.title)"
							></button>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
		<div class="row">
			<div class="col-md-6 center-block">
				<router-link :to="{name: 'shopping'}" class="btn btn-warning btn-lg btn-block">
					<span class="glyphicon glyphicon-arrow-left" aria-hidden="true">Back to shop</span>
				</router-link>
			</div>
			<div class="col-md-6 center-block">
				<button class="btn btn-success btn-lg btn-block center-block">
					<span class="glyphicon glyphicon-usd" aria-hidden="true"></span>
					buy now
				</button>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
	computed: mapGetters({
		cartTotal: 'getShoppingCartTotal',
		cartList: 'getShoppingCart',
		total: 'getCartPriceTotal',
		recommend: 'getRecommendedProducts'
	}),
	methods: mapActions([
		'cancelCart',
		'addCart'
	]),
}
</script>