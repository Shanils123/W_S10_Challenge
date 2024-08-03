import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFetchOrdersHistoryQuery } from '../state/orderAPI'
import { updateFilter } from '../state/filterSlice'

export default function OrderList() {

  const dispatch = useDispatch()
  const orders = useFetchOrdersHistoryQuery().data || []
  const sliceFilter = useSelector((state) => state.filters.size)

  return (
    <div id="orderList">
      <h2>Pizza Orders</h2>
      <ol>
        { orders &&
          orders.filter((ord) => sliceFilter === 'All' || sliceFilter === ord.size)
          .map((ord) => {
            const {id, customer, size, toppings} = ord
            return (
              <li key={id}>
              <div>
                {customer} ordered a size {size} with {" "} 
                {toppings?.length || 'no'} topping
                {toppings && toppings.length === 1 ? '' : 's'}.
              </div>
              </li>
            )
          })
        }
      </ol>
      <div id="sizeFilters">
        Filter by size:
        {
          ['All', 'S', 'M', 'L'].map(size => {
            const className = `button-filter${size === 'All' ? ' active' : ''}`
            const onClick = () => dispatch(updateFilter(size))
            
            return <button onClick={onClick}
              data-testid={`filterBtn${size}`}
              className={className}
              key={size}>{size}</button>
          })
        }
      </div>
    </div>
  )
}
