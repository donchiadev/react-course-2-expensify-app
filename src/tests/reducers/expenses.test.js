import reducer from '../../reducers/expenses'

import expenses from '../fixtures/expenses'

test('should set default state', () => {
    const state = reducer(undefined, { type: '@@INIT'})
    expect(state).toEqual([])
})

test('should add a new expense', () => {
    const expenseData = {
        id: 4,
        description: 'Laptop',
        note: 'Buyed a new laptop',
        amount: 90000,
        startDate: 0
    }
    const state = reducer(expenses, { type: 'ADD_EXPENSE', expense: expenseData })
    expect(state).toEqual(expenses.concat([expenseData]))
})

test('should remove expense by id', () => {
    const state = reducer(expenses, { type: 'REMOVE_EXPENSE', id: expenses[1].id})
    expect(state).toEqual([expenses[0], expenses[2]])
})

test('should not remove expenses id id not found', () => {
    const state = reducer(expenses, { type: 'REMOVE_EXPENSE', id: 9999})
    expect(state).toEqual(expenses)
})

test('should edit expense by id', () => {
    const updates = { description: 'Cinema', note: 'Saw Avengers', amount: 700 }
    const updatedExpense = { ...expenses[0], ...updates }
    const state = reducer(expenses, { type: 'EDIT_EXPENSE', id: expenses[0].id, updates })
    expect(state).toEqual([updatedExpense, expenses[1], expenses[2]])
})

test('should not edit expense if id not found', () => {
    const updates = { description: 'Cinema', note: 'Saw Avengers', amount: 700 }
    const state = reducer(expenses, { type: 'EDIT_EXPENSE', id: 9999, updates })
    expect(state).toEqual(expenses)
})