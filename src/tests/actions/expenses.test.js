import { addExpense, removeExpense, editExpense } from '../../actions/expenses'

test('should setup remove expense action object', () => {
    const action = removeExpense({ id: '123abc' })
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    })
})

test('shoudl setup edit expense action object', () => {
    const action = editExpense('123abc', { description: 'Rent', amount: 200} )
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {
            description: 'Rent',
            amount: 200
        }
    })
})

test('should setup add expense action object with default values', () => {
    const action = addExpense()
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '',
            note: '',
            amount: 0,
            createdAt: 0
        }
    })
})

test('should setup add expense action object with provided values', () => {
    const expenseData = {
        description: 'Rent',
        note: 'Just a rent bill',
        amount: 109500,
        createdAt: 1000
    }
    const action = addExpense(expenseData)
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
})