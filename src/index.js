import C from './constants'
import React from 'react'
import { render } from 'react-dom'
import routes from './routes'
import sampleData from './initialState'
import storeFactory from './store'
import { Provider } from 'react-redux';

const initialState = (localStorage["redux-store"]) ?
    JSON.parse(localStorage["redux-store"]) :
    sampleData

const saveState = () => 
    localStorage["redux-store"] = JSON.stringify(store.getState())

const store = storeFactory(initialState)
window.React = React
window.store = store
//chain listener to the store..
store.subscribe(saveState)

render(
  <Provider store={store}>
    { routes }
  </Provider>,
  document.getElementById('react-container')
)
