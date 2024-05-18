import { configureStore } from '@reduxjs/toolkit'

import { hightNavbar } from './redux/ReduxNavbar'

export default configureStore({
  reducer: {
    hightNavbar
  }
})
