import React, {useEffect, useState, useRef} from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import './App.css';
import {getMovie} from './store/movie/actions'

import Home from './component/Home'
import Detail from './component/Detail'
import SearchBox from './component/SearchBox'
import Loading from './component/Loading'

function App() {
  const dispatch = useDispatch()
  const {movieList} = useSelector((state) => state.movie)
  const {searchString} = useSelector((state) => state.common)
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [scrollTop, setScrollTop] = useState(0)

  const wrapper = useRef()

  // list pertama ditampilkan
 async function fetchData(){
    setLoading(true)
    await dispatch(getMovie({s: searchString, page: page}))
    setLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, [page])

  useEffect(() => {
    var listWrapper = wrapper.current
    function handleScroll(){
      setScrollTop(listWrapper.scrollTop)
      if(Math.ceil(listWrapper.clientHeight + listWrapper.scrollTop) >= listWrapper.scrollHeight){
        setPage((state) => state + 1)
      }
    }

    listWrapper.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      listWrapper.removeEventListener("scroll", handleScroll);
    }
  }, [scrollTop])

  return (
    <Router>
    <div className="App" ref={wrapper}>
      <div className="search-container">
        <SearchBox />
      </div>
        <Switch>
          <Route exact path="/">
            { movieList ? <Home movie={movieList} loading={loading} /> : <Loading />}
          </Route>
          <Route path="/detail">
            <Detail />
          </Route>
        </Switch>
    </div>
    </Router>
  );
}

export default App;
