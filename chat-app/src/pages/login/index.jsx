import React, { Component } from 'react'
import {login} from '../../store/login/actions'
import { connect } from 'react-redux'

class Login extends Component {
    state={
        page: "login"
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        if(this.state.page === 'login') {
            this.props.login({email:e.target.email.value,password: e.target.password.value})
        }
    }
    render() {
        return (
            <div className="login__page ">
               <div className="login__container col-lg-4 d-flex flex-column justify-content-center px-5">
                   <form  className="form-login" onSubmit={this.handleSubmit}>
                       <div className="form-login__header">
                           <h3 className='text-center font-weight-bold'>{this.state.page.toUpperCase()}</h3>
                       </div>
                        {this.state.page === 'login' && (
                            <>
                                <div className="form-login__body">
                                    <div className="form-group">
                                        <label htmlFor="">Email</label>
                                        <input type="text" name="email" className="form-control"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="">Password</label>
                                        <input type="Password" name="password" className="form-control"/>
                                    </div>
                                </div>
                                <div className="form-login__footer">
                                    <div className="form-group row">
                                        <div className='col-8'>
                                                <a href='/' onClick={(e)=>{
                                                    e.preventDefault()
                                                    this.setState({page:"register"})
                                                }}>Register free!</a>

                                        </div>
                                        <div className='col-4'>
                                                <button className='btn btn-primary w-100'>{this.state.page.toUpperCase()}</button>
                                        </div>
                                        </div>
                                </div>
                            </>
                            )}
                       {this.state.page === 'register' && (
                           <>
                                <div className="form-login__body">
                                    <div className="form-group">
                                        <label htmlFor="">Email</label>
                                        <input type="text" className="form-control"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="">Password</label>
                                        <input type="Password" className="form-control"/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="">Re-Password</label>
                                        <input type="Password" className="form-control"/>
                                    </div>
                                </div>
                                <div className="form-login__footer">
                                    <div className="form-group row">
                                        <div className='col-8'>
                                                <a href='/' onClick={(e)=>{
                                                    e.preventDefault()
                                                    this.setState({page:"login"})
                                                }}>Already have an account!</a>

                                        </div>
                                        <div className='col-4'>
                                                <button className='btn btn-primary w-100'>{this.state.page.toUpperCase()}</button>
                                        </div>
                                    </div>
                                </div>
                            </>
                       )}

                   </form>
               </div>
               
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    userInfo: state.loginReducer.userInfo
})
const mapDispatchToProps = {login}
export default connect(mapStateToProps, mapDispatchToProps) (Login);