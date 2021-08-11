import axiosInstance from '../../common/axios'
import qs from 'qs'

const SET_MOVIE = 'SET_MOVIE';
const SET_MOVIE_DETAIL = 'SET_MOVIE_DETAIL';
const SET_SEARCHED_MOVIE = 'SET_SEARCHED_MOVIE'

const setMovie = (movie) => {
    return {
        type: SET_MOVIE,
        movie,
    }
}

const setSearchedMovie = (movie) => {
    return {
        type: SET_SEARCHED_MOVIE,
        movie,
    }
}

const setMovieDetail = (detail) => {
    return {
        type: SET_MOVIE_DETAIL,
        detail,
    }
}

const getMovie = (params) => {
    params['apikey'] = process.env.REACT_APP_API_KEY
    return async dispatch => {
        const data = await axiosInstance.get(`/?${qs.stringify(params)}`)
        if(data.data.Response ==='True') {
            dispatch(setMovie(data.data))
        }else{
            dispatch(setMovie({Search: [], totalResults: 0}))
        }
        
    }
}

const getSearchedMovie = (params) => {
    params['apikey'] = process.env.REACT_APP_API_KEY
    return async dispatch => {
        const data = await axiosInstance.get(`/?${qs.stringify(params)}`)
        if(data.data.Response === 'True'){
            dispatch(setSearchedMovie(data.data))
        }else{
            dispatch(setSearchedMovie({Search: [], totalResults: 0}))
        }
    }
}

const getMovieDetail = (params) => {
    params['apikey'] = process.env.REACT_APP_API_KEY
    return async dispatch => {
        const data = await axiosInstance.get(`/?${qs.stringify(params)}`)
        if(data.data.Response === 'True'){
            dispatch(setMovieDetail(data.data))
        }else{
            dispatch(setMovieDetail({}))
        }
        return data
    }
}

const autocomplete = async (params) => {
    params['apikey'] = process.env.REACT_APP_API_KEY
    const data = await axiosInstance.get(`/?${qs.stringify(params)}`) 
    return data.data
}

export { SET_MOVIE, SET_MOVIE_DETAIL, SET_SEARCHED_MOVIE, getMovie, getMovieDetail, getSearchedMovie, autocomplete}