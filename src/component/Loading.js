import React, {memo} from 'react'
import logo from '../logo.svg';
function Loading() {
    return (
        <div className="loading-wrapper">
            <img src={logo} className="App-logo" alt="logo" />
            <p style={{color: 'white'}}>Loading</p>
        </div>
    )
}

export default memo(Loading)
