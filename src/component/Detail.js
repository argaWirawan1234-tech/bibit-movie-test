import React, {memo, useMemo} from 'react'
import { useSelector } from 'react-redux'

function getPropery(obj){
    let arr = []
    Object.keys(obj).forEach((el) => {
        arr.push(el)
    })

    return arr
}
function Detail() {
    const {movieDetail} = useSelector((state) => state.movie)
    const detail = useMemo(() => getPropery(movieDetail), [movieDetail])
    console.log(detail)
    return (
        <div className="detail-wrapper">
          <div className="detail-box">
              <img src={movieDetail.Poster}></img>
              <div className="detail-movie">
                  {detail.map((el, index) => {
                      if(el === 'Ratings'){
                        return(
                            <div key={index}>
                              <p style={{lineHeight: '1'}}>{el} : {movieDetail[el][0].Value} </p>
                              <hr className="separator"></hr>
                            </div>
                        )
                      }
                      return(
                          <div key={index}>
                            <p style={{lineHeight: '1.5'}}>{el} : {movieDetail[el]}</p>
                            <hr className="separator"></hr>
                          </div>
                      )
                  })}
              </div>
          </div>
        </div>
    )
}

export default memo(Detail)


