// React modules imports
import React from 'react'
import ReactDOM from 'react-dom'
// React-Redux
import { Provider } from  'react-redux'
// Imported moment library only to create some dummy data
import moment from 'moment';
// Application routers
import AppRouter from './routers/AppRouter'
// Application store (actually the configuration function)
import configureStore from './store/configureStore'
// Expenses action generators
import { addExpense, removeExpense } from './actions/expenses'
// Filters action generators
import { setTextFilter } from './actions/filters'
//
import getVisibileExpenses from './selectors/expenses'
// Stles imports
import 'normalize.css/normalize.css'
import './styles/style.scss'
// Style for the date picker
import 'react-dates/lib/css/_datepicker.css'

const store = configureStore()

// store.subscribe(() => {
//     const { expenses, filters } = store.getState()
//     const visibleExpenses = getVisibileExpenses(expenses, filters)
//     console.log(visibleExpenses)
// })

store.dispatch(addExpense({
    description: 'Water Bill',
    amount: 3500,
    note: 'Just the water bill',
    createdAt: moment().valueOf()
}))

store.dispatch(addExpense({
    description: 'Gas Bill',
    amount: 5000,
    note: 'Just the gas bill',
    createdAt: moment().valueOf()
}))


store.dispatch(addExpense({
    description: 'Rent Bill',
    amount: 109500,
    note: 'Just the rent bill',
    createdAt: moment().valueOf()
}))

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'))