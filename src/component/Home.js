/* eslint-disable no-unused-vars */
import React, {memo, useEffect, useState, useRef} from 'react'
import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";

import Card from './Card'
import Loading from './Loading'
import SearchBox from './SearchBox'

import MovieContext from '../context/MovieContext';
import {getMovie, getMovieDetail} from '../store/movie/actions'
function Home(){
    const dispatch = useDispatch()
    const history = useHistory()
    let page = useRef(1)
    const wrapper = useRef()

    const {common, movie} = useSelector((state) => state)

    const [loading, setLoading] = useState(false)
    const [loadingSearchResult, setLoadingSearchResult] = useState(false)
    const [scrollTop, setScrollTop] = useState(0)
    const [scrollToTop, setScrollToTop] = useState(false)
    const [img, setImg] = useState(null)

    // list pertama ditampilkan
    async function fetchData(currentPage){
        setLoading(true)
        await dispatch(getMovie({s: common.searchString, page: currentPage}))
        setLoading(false)
    }

    function goToMovieDetail(data) {
        const res = dispatch(getMovieDetail({ i: data.imdbID}))
        res.then(respond => {
            if(respond.status === 200) history.push('./detail')
        })
    }

    useEffect(() => {
        if(common.searchString) {
            page.current = 1
        }
    }, [common])

    useEffect(() => {
        fetchData(page)
    }, [])
    
    useEffect(() => {
        if(scrollToTop){
            wrapper.current.scrollTop = 0    
        }
    }, [scrollToTop, wrapper])

    useEffect(() => {
        var listWrapper = wrapper.current
        function handleScroll(){
          setScrollTop(listWrapper.scrollTop)
          if(Math.ceil(listWrapper.clientHeight + listWrapper.scrollTop) >= listWrapper.scrollHeight){
            if((page.current < Math.ceil(movie.movieCount/10))){
                page.current +=1
                fetchData(page.current)
            }
          }
        }
    
        listWrapper.addEventListener("scroll", handleScroll, { passive: true });
        return () => {
          listWrapper.removeEventListener("scroll", handleScroll);
        }
    }, [scrollTop, page])

    return (
        <MovieContext.Provider value={{goToMovieDetail}}>
            <div className="home-wrapper" ref={wrapper}>
            <div className={img ? 'shadow-wrapper-active' : 'shadow-wrapper'} onClick={() => setImg(null)}>
                <img src={img} style={{width: '50%'}}></img>
            </div>
            <SearchBox page={page} setScrollToTop={setScrollToTop} setLoadingSearchResult={setLoadingSearchResult} />
            {loadingSearchResult ? <Loading /> : <div className="App-body">
                {
                    movie.movieList.length > 0 ?
                    movie.movieList.map((el, index) => {
                        return(
                            <Card data={el} key={index} setImg={setImg} />
                        )
                    }) : <p style={{fontSize: '16px', fontWeight: 'bolder'}}>Not Found</p>
                }
                {loading ? <Loading /> : null}
            </div>}
            </div>
        </MovieContext.Provider>
    )
}

Home.propTypes = {
    movie: PropTypes.array,
    loading: PropTypes.bool
}

export default memo(Home)