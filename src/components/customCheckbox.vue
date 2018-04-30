<template>
	<div class="squaredFour">
		<input type="checkbox" :id="getID" :checked="item.done" @change="handleChange" />
		<label :for="getID" class="checkbox-icon"></label>
		<label :for="getID" class="checkmark">{{ item.content }}</label>
	</div>
</template>

<script>
export default {
	props: {
		item: Object
	},
	computed: {
		getID() {
			return `custom_${Math.floor(Math.random() * 9999)}`;
		},
	},
	methods: {
		handleChange($event) {
			this.$emit('toggleTodo', {
				key: this.item.key,
				checked: $event.target.checked
			});
		},
	},
};
</script>
<style>
/*.checkbox-icon {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #eee;
}*/
.checkbox-icon input:checked ~ .checkbox-icon:after {
  display: block;
}
.checkbox-icon:after {
  left: 9px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid white;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}

.checkmark {
	color:green;
}
</style>