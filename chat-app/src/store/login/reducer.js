import { push } from 'connected-react-router'
const initialState = {
    loginDatas: [
        {email: 'hongkyhvnh@gmail.com', password: '111111'},
        {email: 'kynhongvuive@gmail.com', password: '111111'}
    ],
    userInfo: null
    
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOG_IN":
            for (const item of state.loginDatas){
                console.log('item',item)
                console.log('action DAta',action.data)
                if( action.data.email === item.email && action.data.password === item.password){
                    push('/home')
                    return {...state, userInfo: action.data}
                }
            }
            alert('Wrong Email or Password! Please try again !!!')
            return {...state}
        case "LOG_OUT":
            localStorage.clear()
            return {...state, userInfo: null}
        default: 
            return {...state}
    }
}

export default reducer;