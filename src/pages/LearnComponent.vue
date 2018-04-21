<template>
	<div>
		<container :list="list" />
	</div>
</template>
<script>
import Container from '../components/container'

export default{
	data () {
		return {
			list: [
			  {
			    title: 'Heading',
			    info: 'Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. ',
			    btntext: 'View details »'
			  },
			  {
			    title: 'Heading',
			    info: 'Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. ',
			    btntext: 'View details »'
			  },
			  {
			    title: 'Heading',
			    info: 'Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.',
			    btntext: 'View details »'
			  },
			  {
			    title: 'Heading',
			    info: 'Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.',
			    btntext: 'View details »'
			  }
			]
		}
	},
	components: {
		Container
	}
}
</script>
<style>
	.celsius {
		font-size: 1.5em;
	}
</style>