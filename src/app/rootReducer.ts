import { combineReducers } from '@reduxjs/toolkit'
import { reposSlice } from './reposReducer'

const rootReducer = combineReducers({
  repos: reposSlice.reducer,
})

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
