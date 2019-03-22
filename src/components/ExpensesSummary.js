import React from 'react'
import { connect } from "react-redux";
import numeral from 'numeral'
import selectExpenses from '../selectors/expenses'
import selectExpensesTotal from '../selectors/expenses-total'

export const ExpenseSummary = (props) => (
    <div>
        <h3>
            {
                props.expensesCount === 1 ? (
                    "There is 1 visible expense."
                ) : (
                    `There are ${props.expensesCount} visible expenses.`
                )
            }
        </h3>
        <h3>Expenses Total is: {numeral(props.expensesTotal / 100).format('$0,0.00')}</h3>
    </div>
)

const mapStateToProps = (state) => {
    const {expenses, filters} = state
    const visibileExpenses = selectExpenses(expenses, filters)
    return {
        expensesCount: visibileExpenses.length,
        expensesTotal: selectExpensesTotal(visibileExpenses)
    }
}

export default connect(mapStateToProps)(ExpenseSummary)