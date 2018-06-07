import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import thunkMiddleware from 'redux-thunk'
import {createLogger} from 'redux-logger'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers/categories'
import {fetchCategoriesIfNeeded, requestCategories} from './actions'


const loggerMiddleware = createLogger()
const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
)


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

store.dispatch(requestCategories)
store.dispatch(fetchCategoriesIfNeeded())

