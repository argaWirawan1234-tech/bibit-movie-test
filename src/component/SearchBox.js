import React, { memo } from 'react'
import {useSelector} from 'react-redux'
 
function SearchBox() {
    const {searchString} = useSelector((state) => state.common)
    console.log(searchString)
    return (
        <div className="search-box">
            <input type="text" placeholder="Search Movie"></input>
        </div>
    )
}

export default memo(SearchBox)