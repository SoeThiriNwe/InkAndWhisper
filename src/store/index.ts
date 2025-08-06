import { configureStore } from '@reduxjs/toolkit'
import  categoryReducer  from './slices/categorySlice'
import companyReducer from './slices/companySlice'
export const store = configureStore({
  reducer: {

    category : categoryReducer,
    company : companyReducer,

  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch