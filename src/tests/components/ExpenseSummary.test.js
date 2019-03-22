import React from 'react'
import { shallow } from 'enzyme'
import { ExpenseSummary } from '../../components/ExpensesSummary'
import selectExpensesTotal from '../../selectors/expenses-total'
import expenses from '../fixtures/expenses';

test('should render ExpenseSummary', () => {
    const wrapper = shallow(<ExpenseSummary />)
    expect(wrapper).toMatchSnapshot()
})

test('should render ExpenseSummary with 0 expenses', () => {
    const wrapper = shallow(<ExpenseSummary
        expensesCount={0}
        expensesTotal={0} 
    />)
    expect(wrapper).toMatchSnapshot()
})

test('should render ExpenseSummary with 1 expense', () => {
    const wrapper = shallow(<ExpenseSummary
        expensesCount={[expenses[0]].length}
        expensesTotal={expenses[0].amount} 
    />)
    expect(wrapper).toMatchSnapshot()
})

test('should render ExpenseSummary with expenses', () => {
    const wrapper = shallow(<ExpenseSummary
        expensesCount={expenses.length}
        expensesTotal={selectExpensesTotal(expenses)} 
    />)
    expect(wrapper).toMatchSnapshot()
})