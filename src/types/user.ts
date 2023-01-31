export interface UserState{
    users:any[],
    loading: boolean,
    error: null | string
}
interface FetchUsersAction{
    type:UserActionTypes.FETCH_USERS,
    payload:any[]
}

interface FetchUsersSuccessAction{
    type:UserActionTypes.FETCH_USERS_SUCCESS,
    payload:any[]
}
 export enum UserActionTypes{
    FETCH_USERS = 'FETCH_USERS',
    FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS',
    FETCH_USERS_ERROR = 'FETCH_USERS_ERROR'
}
interface FetchUsersErrorAction{
    type:UserActionTypes.FETCH_USERS_ERROR,
    payload:string
}

// interface UserAction{
//     type:string,
//     payload:any
// }
export  type UserAction = FetchUsersAction | FetchUsersSuccessAction | FetchUsersErrorAction