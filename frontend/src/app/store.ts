import {combineReducers, applyMiddleware, AnyAction, createStore, legacy_createStore} from 'redux'

import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import {appReducer} from "./app-reducer";
import thunkMiddleware, { ThunkDispatch } from 'redux-thunk'



const rootReducer = combineReducers({
    app: appReducer,
})

export const store = legacy_createStore(rootReducer, applyMiddleware(thunkMiddleware))

export type AppRootState = ReturnType<typeof rootReducer>

export type AppDispatch = ThunkDispatch<AppRootState, unknown, AnyAction>

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<AppRootState> = useSelector
