import { configureStore } from '@reduxjs/toolkit'

import OrderCounter from './OrderCounter'

export default configureStore({
  reducer: {
    counter: OrderCounter,
  },
})
