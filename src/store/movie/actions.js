import axiosInstance from '../../common/axios'

import qs from 'qs'

const SET_MOVIE = 'SET_MOVIE';
const SET_MOVIE_DETAIL = 'SET_MOVIE_DETAIL'

const setMovie = (movie) => {
    return {
        type: SET_MOVIE,
        movie,
    }
}

const getMovie = (params) => {
    params['apikey'] = process.env.REACT_APP_API_KEY
    return async dispatch => {
        const data = await axiosInstance.get(`/?${qs.stringify(params)}`)
        dispatch(setMovie(data.data.Search))
    }
}

const setMovieDetail = (detail) => {
    return {
        type: SET_MOVIE_DETAIL,
        detail,
    }
}

export { SET_MOVIE, SET_MOVIE_DETAIL, getMovie, setMovie, setMovieDetail}