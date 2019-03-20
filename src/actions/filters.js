// SET_TEXT_FILTER action generator
const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
})

// SORT_BY_AMOUNT action generator
const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT',
})

// SORT_BY_DATE action generator
const sortByDate = () => ({
    type: 'SORT_BY_DATE',
})

// SET_START_DATE action generator
const setStartDate = startDate => ({
    type: 'SET_START_DATE',
    startDate
})

// SET_END_DATE action generator
const setEndDate = endDate => ({
    type: 'SET_END_DATE',
    endDate
})

export { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate }