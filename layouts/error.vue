<template>
	<div class="error-page">
		<h1>오류가 발생했습니다</h1>
		<p>
			죄송합니다. 요청을 처리하는 동안 문제가 발생했습니다. 잠시 후 다시 시도해
			주세요.
		</p>
		<p v-if="error">
			에러 메시지: {{ error.message }}<br />
			상태 코드: {{ error.status || 'N/A' }}<br />
			요청 URL: {{ error.url || 'N/A' }}
		</p>
		<nuxt-link to="/">홈으로 돌아가기</nuxt-link>
	</div>
</template>

<script>
export default {
	props: ['error'], // 에러 정보를 받아옵니다
	layout: 'errorLayout',
	computed: {
		errorData() {
			return this.$nuxt.error
		},
	},
}
</script>

<style scoped>
.error-page {
	text-align: center;
	padding: 50px;
	font-size: 18px;
	color: #333;
}

.error-page h1 {
	font-size: 36px;
	color: red;
}

.error-page p {
	margin: 10px 0;
}

.error-page nuxt-link {
	margin-top: 20px;
	display: inline-block;
	color: #007bff;
}
</style>
