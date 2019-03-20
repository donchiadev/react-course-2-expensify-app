import moment from 'moment'

export default [{
    id: '1',
    description: 'Rent',
    note: 'Just the rent bill',
    amount: 109500,
    createdAt: moment(0).valueOf() // 00:00 01/01/1970
}, {
    id: '2',
    description: 'Water',
    note: 'Just the water bill',
    amount: 35000,
    createdAt: moment(0).subtract(4, 'days').valueOf() // 00:00 28/12/1969
}, {
    id: '3',
    description: 'Gas',
    note: 'Just the gas bill',
    amount: 50000,
    createdAt: moment(0).add(4, 'days').valueOf() // 00:00 05/01/1970
}]