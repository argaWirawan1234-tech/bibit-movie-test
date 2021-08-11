import React, {memo} from 'react'
import PropTypes from 'prop-types'

import Card from './Card'
import Loading from './Loading'

function Home({movie, loading}){
    
    return (
        <div className="App-body">
            {movie.length > 0 ? movie.map((el, index) => {
                return(
                    <Card data={el} key={index} />
                )
            }) : <p style={{fontSize: '16px', fontWeight: 'bolder'}}>Not Found</p>}
            {loading ? <Loading /> : null}
        </div>
    )
}

Home.propTypes = {
    movie: PropTypes.array,
    loading: PropTypes.bool
}

export default memo(Home)