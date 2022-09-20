import * as data from "./actionTypes"
import axios from "axios"
export const getData = (querry) => (dispatch) => {
    dispatch({ type: data.GET_ALBUM_REQUEST })
    axios.get("https://record-music.herokuapp.com/albums",querry)
        .then((r) => {
        dispatch({type:data.GET_ALBUM_SUCCESS,payload:r.data})
        })
    .catch((e)=>dispatch({type:data.GET_ALBUM_FAILURE}))
}

export const editData = (id,params) => (dispatch) => {
    dispatch({ type: data.EDIT_ALBUM_REQUEST })
    return axios.patch(`https://record-music.herokuapp.com/albums/${id}`, params)
        .then((r) => {
            return dispatch({ type: data.EDIT_ALBUM_SUCCESS })
        })
    .catch((e)=>dispatch({type:data.EDIT_ALBUM_FAILURE}))
}