import { Route, Switch } from 'react-router-dom'
import { Redirect } from 'react-router'
import React, { Component } from 'react'
import { connect } from 'react-redux'

import LoginPage from './pages/login'
import HomePage from './pages/home'

class routes extends Component {
    render() {
        return (
            <>
                {this.props.userInfo === null ? (
                    <>
                        <Switch>
                            <Route exact path='/login' component={LoginPage}/>
                            <Redirect to='/login' />
                        </Switch>
                        
                    </>
                ) : (
                    <Switch>
                        <Route exact path='/home' component={HomePage}/>
                        <Redirect to='/home' />
                    </Switch>
                )}
            </>
        )
    }
}
const mapStateToProps =(state)=>({
    userInfo: state.loginReducer.userInfo
})
export default connect(mapStateToProps,null)(routes);