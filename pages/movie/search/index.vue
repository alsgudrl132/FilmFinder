<template>
	<div>
		<ul style="display: flex; flex-wrap: wrap; justify-content: center">
			<li v-for="item in receivedData" :key="item.id" style="display: flex">
				<nuxt-link :to="`/movie/detail/${item.id}`">
					<img
						:src="`https://image.tmdb.org/t/p/w200${item.poster_path}`"
						:alt="item.id"
					/>
				</nuxt-link>
			</li>
		</ul>
		<data-pagination
			:total-pages="totalPages"
			:current-page="currentPage"
			@page-changed="getMovie"
		/>
	</div>
</template>
<script>
import DataPagination from '@/components/DataPagination.vue'
import { getMovieTvToTitle } from '@/plugins/axios.js'
import { EventBus } from '@/plugins/eventBus.js'
export default {
	components: { DataPagination },
	data() {
		return {
			receivedData: {},
			totalPages: 0,
			totalResults: 0,
			currentPage: 1,
			title: '',
		}
	},
	watch: {
		// URL 쿼리 변경 감지
		'$route.query.search': {
			async handler(newValue) {
				if (newValue) {
					this.title = newValue
					await this.getMovie(1)
				}
			},
			immediate: true,
		},
	},
	async created() {
		// 라우트 쿼리에서 검색어 가져오기
		const searchQuery = this.$route.query.search
		if (searchQuery) {
			this.title = searchQuery
			await this.getMovie(1)
		}
		// EventBus 리스너 설정
		EventBus.$on('getMovieTvToTitle', async (title) => {
			this.title = title
			await this.getMovie(1)
		})
	},
	beforeDestroy() {
		// 컴포넌트가 제거될 때 EventBus 리스너 제거
		EventBus.$off('getMovieTvToTitle')
	},
	methods: {
		initData(response) {
			this.receivedData = response.data.results
			this.totalPages =
				response.data.total_pages > 500 ? 500 : response.data.total_pages
			this.totalResults = response.data.total_results
			this.currentPage = response.data.page
		},
		async getMovie(page) {
			try {
				const resData = await getMovieTvToTitle(
					'movie',
					'한국',
					this.title,
					page
				)
				this.initData(resData)
			} catch (error) {
				console.error('영화 검색 중 오류 발생:', error)
			}
		},
	},
}
</script>
<style>
</style>