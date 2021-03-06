import React from 'react'
import { shallow } from 'enzyme'
import moment from 'moment'
import { ExpenseListFilters } from '../../components/ExpenseListFilters'
import { filters, altFilters } from '../fixtures/filters'

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper

beforeEach(() => {
    setTextFilter = jest.fn()
    sortByDate = jest.fn()
    sortByAmount = jest.fn()
    setStartDate = jest.fn()
    setEndDate = jest.fn()
    wrapper = shallow(<ExpenseListFilters
        filters={filters}
        setTextFilter={setTextFilter}
        sortByDate={sortByDate}
        sortByAmount={sortByAmount}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
    />)
})

test('should render ExpenseListFilter correctly', () => {
    expect(wrapper).toMatchSnapshot()
})

test('should render ExpenseListFilter with altFilters correctly', () => {
    wrapper.setProps({filters: altFilters})
    expect(wrapper).toMatchSnapshot()
})

test('should handle text change', () => {
    const e = { target: { value: 'Rent'}}
    wrapper.find('input').prop('onChange')(e)
    expect(setTextFilter).toHaveBeenLastCalledWith(e.target.value)
})

test('should sort by date', () => {
    const e = { target: { value: 'date' }}
    wrapper.find('select').prop('onChange')(e)
    expect(sortByDate).toHaveBeenCalled()
})

test('should sort by amount', () => {
    const e = { target: { value: 'amount' }}
    wrapper.find('select').prop('onChange')(e)
    expect(sortByAmount).toHaveBeenCalled()
})

test('should handle date changes', () => {
    const startDate = moment()
    const endDate = moment().add(1, 'days')
    wrapper.find('DateRangePicker').prop('onDatesChange')({ startDate, endDate})
    expect(setStartDate).toHaveBeenLastCalledWith(startDate)
    expect(setEndDate).toHaveBeenLastCalledWith(endDate)
})

test('should handle date focus changes', () => {
    const calendarFocused = 'startDate'
    wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused)
    expect(wrapper.state('calendarFocused')).toBe(calendarFocused)
})