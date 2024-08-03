import { configureStore } from '@reduxjs/toolkit'
import sizeFilterReducer from './filterSlice.js'
import { orderApi  } from './orderAPI.js'

export const resetStore = () => configureStore({
  reducer: {
    filters: sizeFilterReducer,
    [orderApi.reducerPath]: orderApi.reducer
  },
  middleware: (getDefaultMiddleWare) => getDefaultMiddleWare().concat(
    orderApi.middleware
  ),
})

export const store = resetStore()