import axios from 'axios'

// 환경 변수에서 토큰을 가져옵니다.
const token = process.env.VUE_APP_API_TOKEN

const instance = axios.create({
	baseURL: 'https://api.themoviedb.org/3',
	timeout: 5000,
	headers: {
		accept: 'application/json',
		Authorization: `Bearer ${token}`, // 환경 변수에서 가져온 토큰을 Authorization 헤더에 포함
	},
})

function languageRegionConverter(type, data) {
	if (type === 'region') {
		return data === '한국' ? 'ko-KR' : 'ne-US'
	} else if (type === 'language') {
		return data === '한글' ? 'ko' : 'en'
	}
}

// 현재 상영중인 영화목록 가져오기 파라미터로 지역, 페이지번호 가져와서 호출
function getNowPlayingMovies(region, page) {
	try {
		const renameRegion = languageRegionConverter('region', region)
		return instance.get(
			`/movie/now_playing?language=${renameRegion}&page=${page}`
		)
	} catch (error) {
		console.error(error)
	}
}

// 장르 가져오기
function getGenres(option, language) {
	try {
		const renameLanguage = languageRegionConverter('language', language)
		return instance.get(`/genre/${option}/list?language=${renameLanguage}`)
	} catch (error) {
		console.error(error)
	}
}

// 장르에 맞는 영화 목록 호출
function getMovieTvForGenre(option, region, genreId, page) {
	try {
		const renameRegion = languageRegionConverter('region', region)
		return instance.get(
			`/discover/${option}?include_adult=false&include_video=false&language=${renameRegion}&page=${page}&sort_by=popularity.desc&with_genres=${genreId}`
		)
	} catch (error) {
		console.error(error)
	}
}

// 개별 영화 정보 가져오기 (디테일 페이지)
function getMovieTvDetail(option, region, id) {
	try {
		const renameRegion = languageRegionConverter('region', region)
		return instance.get(`/${option}/${id}?language=${renameRegion}`)
	} catch (error) {
		console.error(error)
	}
}

// 영화 제목으로 영화 목록 가져오기
function getMovieTvToTitle(option, region, title, page) {
	try {
		const renameRegion = languageRegionConverter('region', region)
		const renameTitle =
			renameRegion === 'ko-KR' ? encodeURIComponent(title) : title
		return instance.get(
			`/search/${option}?query=${renameTitle}&include_adult=false&language=${renameRegion}&page=${page}`
		)
	} catch (error) {
		console.error(error)
	}
}

// 인기 영화 목록 가져오기
function getPopularMovie(region) {
	try {
		const renameRegion = languageRegionConverter('region', region)
		return instance.get(
			`/discover/movie?include_adult=false&include_null_first_air_dates=false&language=${renameRegion}&page=1&sort_by=popularity.desc`
		)
	} catch (error) {
		console.error(error)
	}
}

// 인기 TV 목록 가져오기
function getPopularTv(region) {
	try {
		const renameRegion = languageRegionConverter('region', region)
		return instance.get(
			`/discover/tv?include_adult=false&include_null_first_air_dates=false&language=${renameRegion}&page=1&sort_by=popularity.desc`
		)
	} catch (error) {
		console.error(error)
	}
}

// 비슷한 영화 목록 가져오기
function getSimilarMovieTv(option, region, id) {
	try {
		const renameRegion = languageRegionConverter('region', region)
		return instance.get(
			`/${option}/${id}/recommendations?language=${renameRegion}&page=1`
		)
	} catch (error) {
		console.error(error)
	}
}

// 영화 출연진(배우) 목록 가져오기
function getCaster(option, region, id) {
	try {
		const renameRegion = languageRegionConverter('region', region)
		return instance.get(`/${option}/${id}/credits?language=${renameRegion}`)
	} catch (error) {
		console.error(error)
	}
}

// 배우의 출연 영화 목록 가져오기
function getMovieTvFromCaster(region, name, page) {
	try {
		const renameRegion = languageRegionConverter('region', region)
		const reName = renameRegion === 'ko-KR' ? encodeURIComponent(name) : name
		return instance.get(
			`https://api.themoviedb.org/3/search/person?query=${reName}&include_adult=false&language=${region}&page=${page}`
		)
	} catch (error) {
		console.error(error)
	}
}

export {
	getNowPlayingMovies,
	getGenres,
	getMovieTvForGenre,
	getMovieTvDetail,
	getMovieTvToTitle,
	getPopularMovie,
	getPopularTv,
	getSimilarMovieTv,
	getCaster,
	getMovieTvFromCaster,
}
