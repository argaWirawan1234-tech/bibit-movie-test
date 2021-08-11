import React, {memo, useContext} from 'react'
import MovieContext from '../context/MovieContext'

import PropTypes from 'prop-types'
function Card({data, setImg}){
    const {goToMovieDetail} = useContext(MovieContext)
    return (
        <div className="card-wrapper">
            <img src={data.Poster} onClick={() => setImg(data.Poster)}></img>
            <div onClick={() => goToMovieDetail(data)}>
                <h4>{data.Title}</h4>
                <p>{data.Year}</p>
            </div>
        </div>
    )
}

Card.propTypes = {
    data: PropTypes.object,
    setImg: PropTypes.func
}
export default memo(Card)