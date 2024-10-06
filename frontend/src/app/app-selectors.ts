import { AppRootState } from './store'

// export const selectAppStatus = (state: AppRootState) => state.app.status
export const selectAppError = (state: AppRootState) => state.app.error
export const selectRandomPage = (state: AppRootState) => state.app.randomPage