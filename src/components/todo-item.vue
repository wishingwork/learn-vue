<template>
	<li>
		<div v-if="!updateMode">
<!-- 			<label>
				<input type="checkbox" :checked="item.done" @change="toggleTodo( item.key )">
				{{ item.content }}
			</label> -->
			<custom-checkbox :item="item" @toggleTodo="toggleTodo" />

			<button class="btn btn-xs btn-primary" @click="showEditMode">
				<span class="glyphicon glyphicon-pencil" aria-hidden="true">ii</span>
			</button>
			<button class="btn btn-xs btn-danger" @click="deleteTodo( item.key )">
				<span class="glyphicon glyphicon-trash" aria-hidden="true">xx</span>
			</button>
		</div>
		<div v-if="updateMode">
			<input class="edit-input" v-focus="updateMode" placeholder="edit todo.." :value="item.content" @keyup.enter="actionEdit" @blur="cancelEdit" @keyup.esc="cancelEdit" />
		</div>
	</li>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
import customCheckbox from './customCheckbox.vue';

export default {
	components: {
		customCheckbox
	},
	props: {
		item: Object
	},
	data () {
		return {
			updateMode: false
		}
	},
	directives: {
		focus (el, {value}, {context}) {
			if (value) {
				context.$nextTick(() => {
					el.focus();
				})
			}
		}
	},
	methods: {
		...mapActions([
			'toggleTodo',
			'deleteTodo',
			'updateTodo'
		]),
		showEditMode () {
			this.updateMode = true;
		},
		actionEdit (e) {
			const userChange = e.target.value.trim();
			console.log('userChange', this.item.key, userChange);
			this.updateTodo({
				key: this.item.key,
				change: userChange
			});
			this.updateMode = false;
		},
		cancelEdit (e) {
			e.target.value = this.item.title;
			this.updateMode = false;
		}
	}
}
</script>

<style>
	.edit-input {
		line-height: 1em;
	}
</style>