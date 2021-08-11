import React, {memo} from 'react'
import PropTypes from 'prop-types'

function Card({data}){
    return (
        <div className="card-wrapper">
            <img src={data.Poster}></img>
            <h4>{data.Title}</h4>
            <p>{data.Year}</p>
        </div>
    )
}

Card.propTypes = {
    data: PropTypes.object
}
export default memo(Card)