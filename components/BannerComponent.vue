<template>
	<div style="display: flex; justify-content: center">
		<div class="banner-container">
			<div style="display: flex; justify-content: center">
				<h1>현재 상영중인 영화</h1>
			</div>
			<div
				class="movie-slider"
				:style="{ transform: `translateX(${-currentIndex * 100}%)` }"
			>
				<div v-for="movie in movies" :key="movie.id" class="movie-slide">
					<div class="movie-content">
						<nuxt-link :to="`/movie/detail/${movie.id}`">
							<img
								:src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`"
								:alt="movie.title"
								class="movie-poster"
							/>
						</nuxt-link>
						<div class="movie-info">
							<h3>{{ movie.title }}</h3>
							<p class="movie-overview">{{ movie.overview }}</p>
						</div>
					</div>
				</div>
			</div>

			<button
				class="nav-btn prev"
				@click="prevSlide"
				aria-label="Previous slide"
			>
				❮
			</button>
			<button class="nav-btn next" @click="nextSlide" aria-label="Next slide">
				❯
			</button>

			<div class="dots">
				<span
					v-for="(_, index) in movies"
					:key="index"
					:class="{ active: currentIndex === index }"
					@click="goToSlide(index)"
				></span>
			</div>
		</div>
	</div>
</template>

<script>
import { getNowPlayingMovies } from '@/plugins/axios.js'

export default {
	data() {
		return {
			movies: [],
			currentIndex: 0,
			timer: null,
		}
	},
	async created() {
		try {
			const response = await getNowPlayingMovies('한국', 1)
			this.movies = response.data.results
			this.startAutoSlide()
		} catch (error) {
			console.log(error)
		}
	},
	beforeDestroy() {
		this.stopAutoSlide()
	},
	methods: {
		startAutoSlide() {
			this.timer = setInterval(this.nextSlide, 5000)
		},
		stopAutoSlide() {
			clearInterval(this.timer)
		},
		nextSlide() {
			this.currentIndex = (this.currentIndex + 1) % this.movies.length
		},
		prevSlide() {
			this.currentIndex =
				this.currentIndex === 0 ? this.movies.length - 1 : this.currentIndex - 1
		},
		goToSlide(index) {
			this.currentIndex = index
		},
	},
}
</script>

<style scoped>
.banner-container {
	position: relative;
	width: 70%;
	height: 500px;
	overflow: hidden;
	margin: 20px 0;
}

.movie-slider {
	display: flex;
	transition: transform 0.5s ease-in-out;
	height: 100%;
}

.movie-slide {
	flex: 0 0 100%;
	position: relative;
}

.movie-content {
	position: relative;
	height: 100%;
	display: flex;
	align-items: center;
	padding: 0 10%;
	background: linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.3));
}

.movie-poster {
	height: 400px;
	border-radius: 8px;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

.movie-info {
	flex: 1;
	padding: 0 40px;
	color: white;
}

.movie-overview {
	padding-bottom: 40px;
}

.movie-info h3 {
	font-size: 2rem;
	margin-bottom: 20px;
}

.movie-info p {
	font-size: 1rem;
	line-height: 1.6;
	max-width: 600px;
}

.nav-btn {
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	background: rgba(0, 0, 0, 0.5);
	color: white;
	border: none;
	padding: 15px;
	cursor: pointer;
	border-radius: 50%;
	font-size: 18px;
	transition: background 0.3s;
}

.nav-btn:hover {
	background: rgba(0, 0, 0, 0.8);
}

.prev {
	left: 20px;
}

.next {
	right: 20px;
}

.dots {
	position: absolute;
	bottom: 20px;
	left: 50%;
	transform: translateX(-50%);
	display: flex;
	gap: 10px;
}

.dots span {
	width: 10px;
	height: 10px;
	border-radius: 50%;
	background: rgba(255, 255, 255, 0.5);
	cursor: pointer;
	transition: background 0.3s;
}

.dots span.active {
	background: white;
}

@media (max-width: 991px) {
	.movie-info {
		display: none;
	}
}
</style>