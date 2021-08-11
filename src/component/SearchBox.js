/* eslint-disable no-unused-vars */
import React, { memo, useState, useEffect, useContext } from 'react'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'

import {setSearchString} from '../store/common/actions'
import {getSearchedMovie, autocomplete} from '../store/movie/actions'
import MovieContext from '../context/MovieContext'
function SearchBox({setScrollToTop}) {
    const dispatch = useDispatch()
    const [searchValue, setSearchValue] = useState('')
    const [autoCompleteList, setaAutoCompleteList] = useState([])
    const [focus, setFocus] = useState(false)
    const {goToMovieDetail} = useContext(MovieContext)

    useEffect(async () => {
        if(searchValue.length > 0) {
            const data = await autocomplete({s: searchValue, page: 1})
            if(data.Response === 'True'){
                setaAutoCompleteList(data.Search)
            }else{
                setaAutoCompleteList([])
            }
        }
    }, [searchValue])

    function handleSubmit(val){
        setScrollToTop(true)
        dispatch(setSearchString(val))
        setTimeout(()=> {
            dispatch(getSearchedMovie({s: val, page: 1}))
        }, 2000)
    }

    return (
        <div className="search-container">
            <div className="search-box">
                <input type="text" placeholder="Search Movie" value={searchValue} onChange={(e) => setSearchValue(e.target.value)} onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}></input>
                <button className="button-search" onClick={() => handleSubmit(searchValue)}>Search</button>
            </div>
            <div style={{position: 'relative', width: '70%'}}>
                <div className={ autoCompleteList.length > 0  && focus ? 'wrapper-autocomplete-active' : 'wrapper-autocomplete'}>
                    {autoCompleteList.map((el, index) => {
                        return(
                            <div key={index} style={{padding: '0px 10px', cursor: 'pointer'}} onClick={() => goToMovieDetail(el)}>
                                <p style={{color: 'black'}}>{el.Title}</p>
                                <hr className="separator2"></hr>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

SearchBox.propTypes = {
    setScrollToTop: PropTypes.func
}

export default memo(SearchBox)