import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cartSlice";
import registerReducer from "./features/RegisterSlice";
import { baseApi } from "./api/baseApi";
export const store = configureStore({

  reducer :{
    [baseApi.reducerPath]:baseApi.reducer,
    cart: cartReducer,
    register:registerReducer,
  },
});

// Infer the `RootState`,  `AppDispatch`, and `AppStore` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
