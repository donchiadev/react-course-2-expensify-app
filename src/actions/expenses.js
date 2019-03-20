import uuid from 'uuid'

// ADD_EXPENSE action generator
const addExpense = (
    { 
        description = '', 
        note = '', 
        amount = 0,
        createdAt = 0
    } = {}
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
})

// REMOVE_EXPENSE action generator
const removeExpense = ({ id } = { }) => ({
    type: 'REMOVE_EXPENSE',
    id
})

// EDIT_EXPENSE action generator
const editExpense = (id, updates = { }) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})

export { addExpense, removeExpense, editExpense } 