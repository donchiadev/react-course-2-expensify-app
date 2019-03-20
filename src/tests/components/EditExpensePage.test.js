import React from 'react'
import { shallow } from 'enzyme'
import { EditExpensePage } from '../../components/EditExpensePage'
import expenses from '../fixtures/expenses'

let history, editExpense, removeExpense, wrapper

beforeEach(() => {
    editExpense = jest.fn()
    removeExpense = jest.fn()
    history = { push: jest.fn() }
    wrapper = shallow(<EditExpensePage 
        expense={expenses[0]} 
        history={history} 
        editExpense={editExpense} 
        removeExpense={removeExpense} />)
})

test('should render EditExpensePage', () => {
    expect(wrapper).toMatchSnapshot()
})

test('should handle editExpense', () => {
    const updates = { description: 'Laptop', note: 'Buyed a new laptop', amount: 80000 }
    wrapper.find('ExpenseForm').prop('onSubmit')(updates)
    expect(history.push).toHaveBeenCalledWith('/')
    expect(editExpense).toHaveBeenLastCalledWith(expenses[0].id, updates)
})

test('should removeExpense', () => {
    wrapper.find('button').at(0).prop('onClick')()
    expect(history.push).toHaveBeenCalledWith('/')
    expect(removeExpense).toHaveBeenLastCalledWith(expenses[0].id)
})

