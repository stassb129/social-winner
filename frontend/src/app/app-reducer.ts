// export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

const initialState = {
    // status: 'idle' as RequestStatusType,
    error: null as string | null,
    randomPage: ''
}

type AppStateType = typeof initialState

export const appReducer = (state: AppStateType = initialState, action: ActionsType): AppStateType => {
    switch (action.type) {
        case 'APP/SET-ERROR': {
            return {...state, error: action.error}
        }
        case 'APP/SET-ADDRESS': {
            return {...state, randomPage: action.address}
        }
        default:
            return state
    }
}

// export const setAppStatusAC = (status: RequestStatusType) => ({
//     type: 'APP/SET-STATUS' as const ,
//     status})
export const setAppErrorAC = (error: string | null) => ({
    type: 'APP/SET-ERROR' ,
    error
} as const)
export const setRandomAddressAC = (address: string) => ({
    type: 'APP/SET-ADDRESS' ,
    address
} as const)

type ActionsType = ReturnType<typeof setAppErrorAC>
| ReturnType<typeof setRandomAddressAC>
    // | ReturnType<typeof setAppStatusAC>
