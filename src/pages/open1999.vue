<template>
	<div class="container">
		<nav class="navbar navbar-default">
			<div class="container-fluid">
				<div class="navbar-form navbar-left">
					<div class="form-group">
						<label for="searchRegion">Search region:</label>
						<select id="searchRegion" class="form-control" v-model="searchRegion">
							<option value="all">All</option>
							<option v-for="option in regionOption" :value="option">{{ option }}</option>
						</select>
					</div>
					<div class="input-group">
						<input type="text" 
							class="form-control"
							placeholder="Search"
							v-model="searchKeyword"
							@keyup.enter="handleWorkSearch">
						<div class="input-group-btn">
							<button class="btn btn-default" @click="handleWorkSearch">
								<i class="glyphicon glyphicon-search"></i>
							</button>
						</div>
					</div>
				</div>
			</div>
		</nav>
		<hr>
		
		<div v-if="opendata.length ===0" class="alert alert-info" role="alert">There is no data</div>
		<div v-else>
			<div class="alert alert-success" role="alert">Overall found: {{ opendata.length }} data</div>

			<div class="row">
				<div class="col-md-4 col-sm-6" v-for="item in opendata">
					<div class="thumbnail">
						<span class="label label-warning">{{ item.ZipName_ }}</span>
						<span class="label label-light-pink">{{ item.InformDesc_ }}</span>
						<span class="label label-info">{{ item.UnitName_ }}</span>
						<div class="caption">
							<h3>
								<a :href="getGoogleMap( item.address_ )" target="_blank">{{ item.address }}</a>
							</h3>
							<p>{{ item.BeforeDesc_ }}</p>
							<small class="text-muted">Feedback date: {{ item.Cre_Date_ }}</small>
						</div>
					</div>
				</div>
			</div>
		</div>

	</div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
	data () {
		return {
			searchRegion: 'all',
			searchKeyword: '',
		}
	},
	created () {
		this.$store.dispatch('open1999');
	},
	computed: mapGetters({
		opendata: 'getOpen1999',
		regionOption: 'getRegionOption'
	}),
	methods: {
		...mapActions([
		]),
		getGoogleMap(address) {
			return `https://www.google.com/maps/place/${address}`;
		},
		handleWorkSearch () {
			this.$store.dispatch('opendataSearchKeyword', this.searchKeyword);
		},
	},
	watch: {
		searchRegion (val) {
			this.$store.dispatch('opendataSearchRegion', val);
		}
	},
};
</script>
<style>
  .thumbnail {
    height: 180px;
  }
  .thumbnail h3 {
    margin-top: 7px;
  }
  .label-ligth-pink {
    background-color: #f68a8a;
  }
</style>