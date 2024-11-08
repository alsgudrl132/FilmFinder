<template>
	<div>
		<ul style="display: flex; flex-wrap: wrap; justify-content: center">
			<li v-for="item in receivedData" :key="item.id" style="display: flex">
				<div v-if="item.media_type === 'tv'">
					<nuxt-link :to="`/tv/detail/${item.id}`">
						<img
							:src="`https://image.tmdb.org/t/p/w200${item.poster_path}`"
							:alt="item.id"
						/>
					</nuxt-link>
				</div>
				<div v-if="item.media_type === 'movie'">
					<nuxt-link :to="`/movie/detail/${item.id}`">
						<img
							:src="`https://image.tmdb.org/t/p/w200${item.poster_path}`"
							:alt="item.id"
						/>
					</nuxt-link>
				</div>
			</li>
		</ul>
		<data-pagination
			:total-pages="totalPages"
			:current-page="currentPage"
			@page-changed="pageChanged"
		/>
	</div>
</template>

<script>
import DataPagination from '@/components/DataPagination.vue'
import { getMovieTvFromCaster } from '@/plugins/axios.js'
export default {
	components: { DataPagination },
	data() {
		return {
			receivedData: {},
			totalPages: 0,
			totalResults: 0,
			currentPage: 1,
		}
	},
	async created() {
		let params = this.$route.params.id
		params = encodeURIComponent(params)
		const resData = await getMovieTvFromCaster('한국', params, 1)
		this.initData(resData)
	},
	methods: {
		initData(response) {
			this.receivedData = response.data.results[0]?.known_for
			this.totalPages =
				response.data.total_pages > 500 ? 500 : response.data.total_pages
			this.totalResults = response.data.total_results
			this.currentPage = response.data.page
		},

		async pageChanged(page) {
			const routeId = this.$route.params.id
			const resData = await getMovieTvFromCaster('한국', routeId, page)
			this.initData(resData)
		},
	},
}
</script>

<style>
</style>