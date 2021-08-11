const SET_SEARCH_STRING = 'SET_SEARCH_STRING'

function setSearchString(searchString){
    return {
        type: SET_SEARCH_STRING,
        searchString,
    }
}

export {SET_SEARCH_STRING, setSearchString}