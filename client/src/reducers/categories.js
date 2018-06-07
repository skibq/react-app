import _ from 'lodash'

const initData = {
  isFetching: false,
  didInvalidate: true,
  categories: []
}

const categories = (state = initData, action) => {
  switch (action.type) {
    case 'ADD_CATEGORY': {
      let updatedState = _.cloneDeep(state)
      updatedState.categories.push({category_name: action.category_name})
      return updatedState
    }
    case 'REORDER': {
      const reorder = (list, startIndex, endIndex) => {
        const result = Array.from(list)
        const [removed] = result.splice(startIndex, 1)
        result.splice(endIndex, 0, removed)
        return result
      }
      let updatedState = _.clone(state)
      updatedState.categories =  reorder(
        state.categories,
        action.result.source.index,
        action.result.destination.index
      )
      return updatedState
    }
    case 'REQUEST_CATEGORIES':
      return _.assign({}, state, {isFetching: true})
    case 'RECEIVE_CATEGORIES':
      return _.assign({}, state, {isFetching: false, didInvalidate: false, categories: action.categories})
    default:
      return state
  }
}

export default categories