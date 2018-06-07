import fetch from 'cross-fetch'


export const addCategory = category_name => ({
  type: 'ADD_CATEGORY',
  category_name: category_name
})
export const reorder = result => ({
  type: 'REORDER',
  result: result
})
export const requestCategories = () => ({
  type: 'REQUEST_CATEGORIES',
})
export const receiveCategories = (json) => ({
  type: 'RECEIVE_CATEGORIES',
  categories: json,
  receivedAt: Date.now()
})

function fetchCategories() {
  return dispatch => {
    dispatch(requestCategories())
    return fetch('http://localhost:4000/categories').then(
      response => response.json(),
      error => console.log(`Error during fetching categories: ${error}`)
    ).then(json => dispatch(receiveCategories(json)))
  }
}
function shouldFetchCategories(state) {
  if (!state.categories) {
    return true
  } else if (state.isFetching) {
    return false
  } else {
    return state.didInvalidate
  }
}
export function fetchCategoriesIfNeeded() {
  return (dispatch, getState) => {
    if (shouldFetchCategories(getState())) {
      return dispatch(fetchCategories())
    } else {
      return Promise.resolve()
    }
  }
}