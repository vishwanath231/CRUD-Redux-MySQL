import { 
    USER_REGISTER, 
    USER_LIST, 
    SELECT_USER,
    USER_UPDATE,
    USER_DELETE
} from '../constants/Types';
import axios from 'axios';


export const userRegister = (data) => {
    
    return (dispatch) => {
        axios
        .post(`http://localhost:5000/api/v1/user/new`, data)
        .then((user) => {
            dispatch({
                type: USER_REGISTER,
                payload: user.data.data
            })
        })
    }
}



export const userList = () => {
    return (dispatch) => {
        axios
        .get('http://localhost:5000/api/v1/user/all')
        .then((user) => {
            dispatch({
                type: USER_LIST,
                payload: user.data.data
            })
        })
    }
} 



export const userSelect = (id) => {
    return (dispatch) => {
        axios
        .get(`http://localhost:5000/api/v1/user/select/${id}`)
        .then((user) => {
            dispatch({
                type: SELECT_USER,
                payload: user.data.data
            })
        })

    }
}


export const userUpdate = (id,updateData) => {
    return (dispatch) => {
        axios
        .put(`http://localhost:5000/api/v1/user/update`, updateData)
        .then((user) => {
            dispatch({
                type: USER_UPDATE,
                userId: id,
                payload: user.data.data,

            })
        })
    }
}


export const userDelete = (id) => {

    return (dispatch) => {
        axios
        .delete(`http://localhost:5000/api/v1/user/delete/${id}`)
        .then(() => {
            dispatch({
                type: USER_DELETE,
                payload: id
            })
            
        })
    }
} 