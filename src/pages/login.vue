<template>
	<div id="login">
		<img src="state/img/ironman2017.jpg" class="responsive-img">
		<div class="container">
			<div class="form-signin">
				<h2 class="form-signin-heading">Please sign in</h2>
				<label for="email" class="sr-only">Email address</label>
				<input 
				 	v-model="email"
				 	type="email"
				 	id="email"
				 	class="form-control"
				 	placeholder="Email address" required autofocus />
				 <label for="inputPassword" class="sr-only">Password</label>
				 <input
				 	v-model="password"
				 	@keyup.enter="login"
				 	type="password"
				 	id="inputPassword"
				 	class="form-control"
				 	placeholder="Password" required />
				 <button
				 	class="btn btn-lg btn-primary btn-block"
				 	type="submit"
				 	@click="login">Sign in
				 </button>
				 <br>
			</div>
		</div>
	</div>
</template>
<script>
import{ mapGetters, mapActions } from 'vuex'
export default {
	data () {
		return {
			email: 'nntnnt@gmail.com',
			password: ''
		}
	},
	methods: {
		login() {
			this.$store.dispatch('actionLogin', {
				email: this.email,
				password: this.password
			}).then(() => {
				console.log('3. get Promise resolve');
				setTimeout(() => {
					this.$router.push('/hello');
				}, 1000);
			}).catch(() => {
				console.log('error get Promise reject!');
			});
		}
	}
}
</script>