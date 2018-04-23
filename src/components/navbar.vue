<template>
<!-- 	<nav class="navbar navbar-inverse navbar-fixed-top">
		<div class="container">
			<div class="navbar-header">
				<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
					<span class="sr-only">Toggle navigation</span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
				</button>
				<a href="#" class="navbar-brand">Project name</a>
			</div>
			<div id="navbar" class="navbar-collapse collapse">
				<form class="navbar-form navbar-right">
					<slot name="right"></slot>	
				</form>
			</div>
		</div>
	</nav> -->
	
	<b-navbar toggleable="md" type="dark" variant="info">
	  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
	  <b-navbar-brand href="#">Project name</b-navbar-brand>
	  <b-collapse is-nav id="nav_collapse">	  
	  	<b-navbar-nav class="ml-auto">
	      <b-nav-form>
	        <slot name="right"></slot>
	      </b-nav-form>

	      <b-nav-item-dropdown text="Toggle navigation" >
	        <b-dropdown-item href="#">EN</b-dropdown-item>
	        <b-dropdown-item href="#">ES</b-dropdown-item>
	        <b-dropdown-item href="#">RU</b-dropdown-item>
	        <b-dropdown-item href="#">FA</b-dropdown-item>
	      </b-nav-item-dropdown>  
		</b-navbar-nav>
	  </b-collapse>
  	</b-navbar>
</template>
<script>

</script>
<style>
	.celsius {
		font-size: 1.5em;
	}
</style>