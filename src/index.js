import React from 'react'
import 'bulma/css/bulma.css'
import './styles.css'
import  {createRoot } from 'react-dom/client'
import App from './App'
import { Provider } from 'react-redux'
import { store } from  './Store'

const el = document.getElementById('root')
const root = createRoot(el)

root.render(
    <Provider store={store}>
    <App/>
    </Provider>
)