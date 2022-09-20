import * as data from "./actionTypes"
const initialState = {
    AuthState: false,
    token: "",
    isAuthLoading: false,
    isAuthError:false
}
export const reducer = (state=initialState,{type,payload}) => {
    switch (type) {
        case data.USER_LOGIN_REQUEST: {
            return {
                ...state,
                isAuthLoading:true
           }
        }
        case data.USER_LOGIN_SUCCESS: {
            return {
                ...state,
                Auth: true,
                token: payload,
                isAuthLoading: false,
                isAuthError:false
                
            }
        }
        case data.USER_LOGIN_FAILURE: {
            return{
                ...state,
                isAuthError: true,
                isAuthLoading:false,
                token: "",
                Auth:false
            }
        }
        default:return state
    }
}