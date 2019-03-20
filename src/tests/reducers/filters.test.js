import moment from 'moment'
import reducer from '../../reducers/filters'

test('should setup default filter values', () => {
    const state = reducer(undefined, {type: '@@INIT'})
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
})

test('should set sortBy to amount', () => {
    const state = reducer(undefined, {type: 'SORT_BY_AMOUNT'})
    expect(state).toEqual({
        text: '',
        sortBy: 'amount',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
})

test('should set sortBy to date', () => {
    const currentState = {
        text: '',
        sortBy: 'amount',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    }
    const state = reducer(currentState, {type: 'SORT_BY_DATE'})
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
})

test('should set text', () => {
    const state = reducer(undefined, {type: 'SET_TEXT_FILTER', text: 'rent'})
    expect(state).toEqual({
        text: 'rent',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
})

test('should set startDate', () => {
    const startDate = moment()
    const state = reducer(undefined, {type: 'SET_START_DATE', startDate })
    expect(state.startDate).toEqual(startDate)
})

test('should set endDate', () => {
    const endDate = moment()
    const state = reducer(undefined, {type: 'SET_END_DATE', endDate})
    expect(state.endDate).toEqual(endDate)
})