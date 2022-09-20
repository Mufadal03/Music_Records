import * as data from "./actionTypes"
const initialState = {
    musicRecords: [],
    isLoading: false,
    isError:false
}
export const reducer = (state=initialState,{type,payload}) => {
    switch (type) {
        case data.GET_ALBUM_REQUEST: {
            return {
                ...state,
                isLoading:true
            }
        }
        case data.GET_ALBUM_SUCCESS: {
            return {
                ...state,
                isLoading: false,
                musicRecords:[...payload]

            }
        }
        case data.GET_ALBUM_FAILURE: {
            return {
                ...state,
                isError:true
            }
        }
        default:return state
    }
}