import { 
    USER_REGISTER, 
    USER_LIST, 
    SELECT_USER,
    USER_UPDATE,
    USER_DELETE
} from '../constants/Types';




const userInitialState = {
    users: []
}

export const userReducer = (state = userInitialState, { type, payload, userId }) => {
    switch (type) {
       
        case USER_REGISTER:
            return{
                ...state,
                users: [...state.users, payload]
            }

        case USER_LIST: 
            return{
                ...state,
                users: [...payload]
            }
            
        case USER_UPDATE:
            return{
                ...state,
                users: state.users.map((val) => val.id === userId ? payload : val)
            }
            

        case USER_DELETE:
            return {
                ...state,
                users: state.users.filter((val) => val.uuid !== payload)
            }
        default:
            return state;
    }
}



const selectUserInitialState = {
    userList: []  
}

export const selectUserReducer = (state = selectUserInitialState, { type, payload }) => {

    switch (type) {
        case SELECT_USER:
            return{
                ...state,
                userList: payload
            }
    
        default:
            return state;
    }
}

