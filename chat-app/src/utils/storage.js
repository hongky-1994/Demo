const loadState = () => {
    try {
        const initialState = localStorage.getItem('state')

        const newState = {
            ...JSON.parse(initialState),
            router: {
                ...JSON.parse(initialState).router,
                location: {
                    ...JSON.parse(initialState).router.location,
                    pathname: window.location.pathname
                }
            }
        }
        if(initialState === null){
            return undefined
        }
        if(window.location.pathname.split('/').length > 3) {
            return JSON.parse(initialState)
        }
        return newState
    } catch (error) {
        return undefined
    }
}

const saveState = (state) => {
    try {
        const initialState = JSON.stringify(state)
        localStorage.setItem('state', initialState)
    } catch {

    }
}

export {loadState, saveState}