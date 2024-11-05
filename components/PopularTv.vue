<template>
	<div style="display: flex; justify-content: center">
		<div class="banner-container">
			<div style="display: flex; justify-content: center">
				<h1>현재 인기 TV 시리즈</h1>
			</div>
			<div
				class="tv-slider"
				:style="{ transform: `translateX(${-currentIndex * 100}%)` }"
			>
				<div v-for="tv in tvs" :key="tv.id" class="tv-slide">
					<div class="tv-content">
						<nuxt-link :to="`/tv/detail/${tv.id}`">
							<img
								:src="`https://image.tmdb.org/t/p/w500${tv.poster_path}`"
								:alt="tv.title"
								class="tv-poster"
							/>
						</nuxt-link>
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
		</div>
	</div>
</template>

<script>
import { getPopularTv } from '@/plugins/axios.js'

export default {
	data() {
		return {
			tvs: [],
			currentIndex: 0,
			timer: null,
		}
	},
	async created() {
		try {
			const response = await getPopularTv('한국', 1)
			this.tvs = response.data.results
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
			this.currentIndex = (this.currentIndex + 1) % this.tvs.length
		},
		prevSlide() {
			this.currentIndex =
				this.currentIndex === 0 ? this.tvs.length - 1 : this.currentIndex - 1
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

.tv-slider {
	display: flex;
	transition: transform 0.5s ease-in-out;
	height: 100%;
	width: 33%;
}

.tv-slide {
	flex: 0 0 100%;
	position: relative;
}

.tv-content {
	position: relative;
	height: 100%;
	display: flex;
	align-items: center;
	padding: 0 10%;
	background: linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.3));
}

.tv-poster {
	height: 400px;
	border-radius: 8px;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
}

.tv-info {
	flex: 1;
	padding: 0 40px;
	color: white;
}

.tv-info h3 {
	font-size: 2rem;
	margin-bottom: 20px;
}

.tv-info p {
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
</style>