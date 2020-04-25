export const login = (data) => ({
    type: "CALL_LOGIN",
    data
})
export const logout = () => ({
    type:"LOG_OUT"
})
export const loginSuccess = (data) => ({
    type: "LOGIN_SUCCESS",
    payload: data
})
export const loginFail = (error) => ({
    type: "LOGIN_FAIL",
    message: error.message

})