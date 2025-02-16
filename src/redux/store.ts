
import { configureStore } from '@reduxjs/toolkit'
import { productApi } from './api/baseApi'
import { productSlice } from './features/product/productSlice'

export const store = configureStore({
    reducer: {
        [productApi.reducerPath]: productApi.reducer,
        product: productSlice.reducer
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productApi.middleware),

})

// export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store