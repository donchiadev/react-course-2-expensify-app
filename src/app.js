// React modules imports
import React from 'react'
import ReactDOM from 'react-dom'
// React-Redux
import { Provider } from  'react-redux'
// Application routers
import AppRouter from './routers/AppRouter'
// Application store (actually the configuration function)
import configureStore from './store/configureStore'
// Expenses action generators
import { addExpense, removeExpense } from './actions/expenses'
// Filters action generators
import { setTextFilter } from './actions/filters'
// Expenses selector
import getVisibileExpenses from './selectors/expenses'
// Styles imports
import 'normalize.css/normalize.css'
import './styles/style.scss'
// Style for the date picker
import 'react-dates/lib/css/_datepicker.css'

const store = configureStore()

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'))