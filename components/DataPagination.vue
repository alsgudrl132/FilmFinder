<template>
	<div class="pagination">
		<button @click="goToPage(1)">&#171;</button>
		<button v-if="currentPage !== 1" @click="goToPage(currentPage - 1)">
			&lt;
		</button>
		<span>Page {{ currentPage }} of {{ totalPages }}</span>
		<button
			v-if="currentPage !== totalPages"
			@click="goToPage(currentPage + 1)"
		>
			&gt;
		</button>
		<button @click="goToPage(totalPages)">&#187;</button>
	</div>
</template>
<script>
export default {
	props: {
		totalPages: {
			type: Number,
			required: true,
		},
		currentPage: {
			type: Number,
			required: true,
		},
	},
	methods: {
		goToPage(page) {
			if (page < 1 || page > this.totalPages) return
			this.$emit('page-changed', page)
		},
	},
}
</script>

<style scoped>
.pagination {
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 20px 0;
}

button {
	margin: 0px 15px;
	padding: 5px 10px;
	cursor: pointer;
	background-color: #333;
	color: white;
	border: none;
}
</style>
