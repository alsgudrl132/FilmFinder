<template>
	<div>
		<banner-component />
		<popular-movie />
		<popular-tv />
	</div>
</template>

<script>
import BannerComponent from '@/components/BannerComponent.vue'
import PopularMovie from '@/components/PopularMovie.vue'
import PopularTv from '@/components/PopularTv.vue'
export default {
	components: {
		BannerComponent,
		PopularMovie,
		PopularTv,
	},
}
</script>