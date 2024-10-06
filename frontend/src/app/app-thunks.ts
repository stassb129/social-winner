import {appAPI} from "../api/app-api";
import {Dispatch} from "redux";
import {setRandomAddressAC} from "./app-reducer";

export const setRandomAddressTC = (address: string) => async (dispatch: Dispatch) => {
    const result = await appAPI.addUrlAddress(address)
        dispatch(setRandomAddressAC(result.data))
}