<template>
	<div v-if="receivedData" class="movie-detail">
		<!-- 헤더 섹션 - 배경 이미지와 기본 정보 -->
		<div
			class="header-section"
			:style="{
				backgroundImage: `url(https://image.tmdb.org/t/p/original${receivedData.backdrop_path})`,
			}"
		>
			<div class="header-content">
				<div class="poster">
					<img
						:src="`https://image.tmdb.org/t/p/w500${receivedData.poster_path}`"
						:alt="receivedData.name"
					/>
				</div>
				<div class="basic-info">
					<h1>{{ receivedData.name }}</h1>
					<p
						class="original-title"
						v-if="receivedData.original_name !== receivedData.name"
					>
						{{ receivedData.original_name }}
					</p>
					<div class="meta-info">
						<span class="rating">
							<i class="fas fa-star"></i>
							{{ receivedData.vote_average?.toFixed(1) }}
						</span>
						<span class="year">{{
							receivedData.release_date?.slice(0, 4)
						}}</span>
						<span class="runtime" v-if="receivedData.runtime">
							{{ Math.floor(receivedData.runtime / 60) }}시간
							{{ receivedData.runtime % 60 }}분
						</span>
					</div>
					<div class="genres">
						<span
							v-for="genre in receivedData.genres"
							:key="genre.id"
							class="genre-tag"
						>
							{{ genre.name }}
						</span>
					</div>
					<div class="tagline" v-if="receivedData.tagline">
						"{{ receivedData.tagline }}"
					</div>
				</div>
			</div>
		</div>

		<!-- 상세 정보 섹션 -->
		<div class="content-section">
			<div class="main-content">
				<section class="cast-section">
					<h2>주요 출연진</h2>
					<div class="cast-grid">
						<div
							v-for="actor in filteredCastData"
							:key="actor.id"
							class="cast-card"
						>
							<nuxt-link :to="`/movie/castermovie/${actor.name}`">
								<div class="cast-image">
									<img
										:src="`https://image.tmdb.org/t/p/w185${actor.profile_path}`"
										:alt="actor.name"
									/>
								</div>
								<div class="cast-info">
									<h3>{{ actor.name }}</h3>
									<p>{{ actor.character }}</p>
								</div>
							</nuxt-link>
						</div>
					</div>
				</section>

				<section class="overview">
					<h2>줄거리</h2>
					<p>{{ receivedData.overview }}</p>
				</section>

				<section class="additional-info">
					<div class="info-grid">
						<div class="info-item">
							<h3>상태</h3>
							<p>
								{{
									receivedData.status === 'Ended' ? '방영 종료' : '방영 예정'
								}}
							</p>
						</div>
						<div class="info-item">
							<h3>개봉일</h3>
							<p>{{ receivedData.first_air_date }}</p>
						</div>
						<div class="info-item">
							<h3>제작비</h3>
							<p>${{ (receivedData.budget || 0).toLocaleString() }}</p>
						</div>
						<div class="info-item">
							<h3>수익</h3>
							<p>${{ (receivedData.revenue || 0).toLocaleString() }}</p>
						</div>
					</div>
				</section>

				<section
					class="production-companies"
					v-if="receivedData.production_companies?.length"
				>
					<h2>제작사</h2>
					<div class="companies-grid">
						<div
							v-for="company in receivedData.production_companies"
							:key="company.id"
							class="company"
						>
							<img
								v-if="company.logo_path"
								:src="`https://image.tmdb.org/t/p/w200${company.logo_path}`"
								:alt="company.name"
							/>
							<span v-else class="company-name">{{ company.name }}</span>
						</div>
					</div>
				</section>

				<section>
					<h2>비슷한 TV 시리즈</h2>
					<div class="similar-grid">
						<div v-for="item in filterdSimilarData" :key="item.id">
							<nuxt-link :to="`/tv/detail/${item.id}`">
								<img
									:src="`https://image.tmdb.org/t/p/w200${item.poster_path}`"
									:alt="item.title"
								/>
							</nuxt-link>
						</div>
					</div>
				</section>
			</div>
		</div>
	</div>
</template>

<script>
import {
	getMovieTvDetail,
	getSimilarMovieTv,
	getCaster,
} from '@/plugins/axios.js'

export default {
	data() {
		return {
			receivedData: null,
			similarData: null,
			casterData: null,
		}
	},
	computed: {
		filteredCastData() {
			if (!this.casterData) return []
			return this.casterData.filter((actor) => actor.profile_path).slice(0, 10)
		},
		filterdSimilarData() {
			if (!this.similarData) return []
			return this.similarData
				.filter((similar) => similar.poster_path)
				.slice(0, 15)
		},
	},
	async created() {
		const routeId = this.$route.params.id
		try {
			const response = await getMovieTvDetail('tv', '한국', routeId)
			this.receivedData = response.data
			const similarResponse = await getSimilarMovieTv('tv', '한국', routeId)
			this.similarData = similarResponse.data.results
			const casterResponse = await getCaster('tv', '한국', routeId)
			this.casterData = casterResponse.data.cast
			console.log(this.receivedData)
		} catch (error) {
			console.error('Error fetching movie details:', error)
		}
	},
}
</script>

<style scoped>
.movie-detail {
	min-height: 100vh;
	background-color: #f5f5f5;
}

.header-section {
	position: relative;
	height: 600px;
	background-size: cover;
	background-position: center;
	color: white;
}

.header-section::before {
	content: '';
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: linear-gradient(
		to right,
		rgba(0, 0, 0, 0.9) 20%,
		rgba(0, 0, 0, 0.6) 50%,
		rgba(0, 0, 0, 0.4)
	);
}

.header-content {
	position: relative;
	max-width: 1200px;
	margin: 0 auto;
	padding: 40px;
	height: 100%;
	display: flex;
	align-items: center;
	gap: 40px;
}

.poster {
	flex-shrink: 0;
}

.poster img {
	width: 300px;
	border-radius: 12px;
	box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
}

.basic-info {
	flex: 1;
}

.basic-info h1 {
	font-size: 2.5rem;
	margin-bottom: 10px;
}

.original-title {
	font-size: 1.2rem;
	opacity: 0.8;
	margin-bottom: 20px;
}

.meta-info {
	display: flex;
	gap: 20px;
	margin-bottom: 20px;
}

.rating {
	display: flex;
	align-items: center;
	gap: 5px;
	color: #ffd700;
}

.genres {
	display: flex;
	flex-wrap: wrap;
	gap: 10px;
	margin-bottom: 20px;
}

.genre-tag {
	background: rgba(255, 255, 255, 0.2);
	padding: 5px 15px;
	border-radius: 20px;
	font-size: 0.9rem;
}

.tagline {
	font-style: italic;
	font-size: 1.2rem;
	opacity: 0.9;
}

.content-section {
	max-width: 1200px;
	margin: -60px auto 0;
	position: relative;
	padding: 0 40px 40px;
}

.main-content {
	background: white;
	border-radius: 12px;
	padding: 40px;
	box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

/* 새로운 캐스트 섹션 스타일 */
.cast-section {
	margin-bottom: 40px;
}

.cast-grid {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
	gap: 20px;
}

.cast-card {
	background: #f8f8f8;
	border-radius: 8px;
	overflow: hidden;
	transition: transform 0.2s;
}

.cast-card:hover {
	transform: translateY(-5px);
}

.cast-image {
	width: 100%;
	height: 250px;
	overflow: hidden;
}

.cast-image img {
	width: 100%;
	height: 100%;
	object-fit: cover;
}

.cast-info {
	padding: 15px;
}

.cast-info h3 {
	font-size: 1rem;
	margin-bottom: 5px;
	color: #333;
}

.cast-info p {
	font-size: 0.9rem;
	color: #666;
}

.overview {
	margin-bottom: 40px;
}

h2 {
	font-size: 1.5rem;
	margin-bottom: 20px;
	color: #333;
}

.overview p {
	line-height: 1.7;
	color: #555;
}

.info-grid {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
	gap: 20px;
	margin-bottom: 40px;
}

.info-item {
	background: #f8f8f8;
	padding: 20px;
	border-radius: 8px;
}

.info-item h3 {
	font-size: 0.9rem;
	color: #666;
	margin-bottom: 8px;
}

.info-item p {
	font-size: 1.1rem;
	color: #333;
}

.companies-grid {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
	gap: 20px;
}

.company {
	background: #f8f8f8;
	padding: 20px;
	border-radius: 8px;
	display: flex;
	align-items: center;
	justify-content: center;
	height: 100px;
}

.company img {
	max-width: 100%;
	max-height: 80px;
	object-fit: contain;
}

.company-name {
	text-align: center;
	color: #666;
}

.similar-grid {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
	gap: 20px;
}

.similar-grid img {
	width: 100%;
	border-radius: 8px;
	transition: transform 0.2s;
}

.similar-grid img:hover {
	transform: scale(1.05);
}

@media (max-width: 768px) {
	.header-content {
		flex-direction: column;
		padding: 20px;
	}

	.poster img {
		width: 200px;
	}

	.basic-info h1 {
		font-size: 2rem;
	}

	.content-section {
		padding: 0 20px 20px;
	}

	.main-content {
		padding: 20px;
	}

	.cast-grid {
		grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
	}

	.cast-image {
		height: 200px;
	}
}
</style>