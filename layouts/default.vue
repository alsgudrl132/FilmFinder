<template>
	<div>
		<nav class="navbar">
			<nuxt-link to="/" class="logo"><p>FilmFinder</p></nuxt-link>
			<div class="nav-controls">
				<select class="genre-select" v-model="selectedCategory">
					<option value="카테고리 선택">카테고리 선택</option>
					<option value="영화">영화</option>
					<option value="TV 시리즈">TV 시리즈</option>
				</select>
				<select
					v-if="selectedCategory === '영화'"
					v-model="selectedGenre"
					class="genre-select"
					@change="changeHandler('movie')"
				>
					<option value="장르 선택">장르 선택</option>
					<option
						v-for="movieGenre in movieGenres"
						:key="movieGenre.id"
						:value="movieGenre.name"
						class="selected-option"
					>
						{{ movieGenre.name }}
					</option>
				</select>
				<select
					v-if="selectedCategory === 'TV 시리즈'"
					v-model="selectedGenre"
					class="genre-select"
					@change="changeHandler('tv')"
				>
					<option value="장르 선택">장르 선택</option>
					<option
						v-for="tvGenre in tvGenres"
						:key="tvGenre.id"
						:value="tvGenre.name"
						class="selected-option"
					>
						{{ tvGenre.name }}
					</option>
				</select>
				<input
					v-model="title"
					type="text"
					class="search-input"
					placeholder="영화 이름 검색"
					@keypress.enter="getMovieTvToTitle"
				/>
				<button class="search-button" @click="getMovieTvToTitle">검색</button>
			</div>
		</nav>
		<nuxt />
	</div>
</template>

<script>
import { getGenres } from '@/plugins/axios.js'
import { EventBus } from '@/plugins/eventBus.js'
export default {
	data() {
		return {
			movieGenres: [],
			tvGenres: [],
			selectedGenre: '장르 선택',
			selectedCategory: '카테고리 선택',
			title: '',
		}
	},
	async created() {
		const movieGenres = await getGenres('movie', '한글')
		const tvGenres = await getGenres('tv', '한글')
		this.movieGenres = movieGenres.data.genres
		this.tvGenres = tvGenres.data.genres
	},
	methods: {
		changeHandler(option) {
			if (this.selectedGenre === '장르 선택') {
				return {}
			} else if (this.selectedCategory === '영화') {
				const copymovieGenres = [...this.movieGenres]
				const findGenre = copymovieGenres.find(
					(item) => item.name === this.selectedGenre
				)
				this.$router.push(`/${option}/genre/${findGenre.id}`)
			} else if (this.selectedCategory === 'TV 시리즈') {
				const copytvGenres = [...this.tvGenres]
				const findGenre = copytvGenres.find(
					(item) => item.name === this.selectedGenre
				)
				this.$router.push(`/${option}/genre/${findGenre.id}`)
			}
		},
		getMovieTvToTitle() {
			if (this.selectedCategory === '영화') {
				EventBus.$emit('getMovieTvToTitle', this.title)
				this.$router.push({
					path: '/movie/search',
					query: { search: this.title },
				})
			} else if (this.selectedCategory === 'TV 시리즈') {
				EventBus.$emit('getMovieTvToTitle', this.title)
				this.$router.push({
					path: '/tv/search',
					query: { search: this.title },
				})
			}
		},
	},
}
</script>

<style scoped>
body {
	font-family: Arial, sans-serif;
	margin: 0;
	padding: 0;
}

.navbar {
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: #333;
	padding: 10px 20px;
	color: white;
}

.logo {
	font-size: 24px;
	font-weight: bold;
}

.nav-controls {
	display: flex;
	align-items: center;
}

.genre-select {
	margin-right: 10px;
	padding: 5px;
}

.search-input {
	padding: 5px;
	margin-right: 10px;
}

.search-button {
	padding: 5px 10px;
	background-color: #ff6347;
	border: none;
	color: white;
	cursor: pointer;
}

.search-button:hover {
	background-color: #ff4500;
}

@media (max-width: 600px) {
	.navbar {
		flex-direction: column;
		align-items: flex-start;
	}

	.nav-controls {
		margin-top: 10px;
		width: 100%;
	}

	.genre-select,
	.search-input,
	.search-button {
		width: 100%;
		margin: 5px 0;
	}
}
</style>

<style>
@import '@/assets/css/styles.css';
</style>