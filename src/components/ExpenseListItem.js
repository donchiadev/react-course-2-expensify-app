import React from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'

export const ExpenseListItem = ({ id, description, amount, createdAt }) => (
    <div>
        <Link to={`/edit/${id}`}><h3>{description}</h3></Link>
        <p>{`$${amount / 100}`} - {moment(createdAt).format('D/M/YYYY')}</p>
    </div>
)

export default ExpenseListItem