import * as data from "./actionTypes"
import axios from "axios"

export const login = (payload) => (dispatch) => {
    dispatch({ type: data.USER_LOGIN_REQUEST })
    return axios({
        method: "post",
        url: "/api/login",
        baseURL: "https://reqres.in",
        data:payload
    })
        .then((r) =>
        {
            return dispatch({ type: data.USER_LOGIN_SUCCESS, payload: r.data.token })
        }
    )
        .catch((e) => (
        dispatch({type:data.USER_LOGIN_FAILURE})
    ))
}