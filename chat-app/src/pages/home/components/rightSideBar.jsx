import React, { Component } from 'react'
import {logout} from '../../../store/login/actions'
import { connect } from 'react-redux'

class RightSideBar extends Component {
    render() {
        return (
            <div className='side-bar-right col-sm-2  bg-white border-left'>
                <div className=" row">
                    
                </div>
                <div class="list-group-flush">
                    <div className="list-group-item py-5">
                        <p className='font-weight-bold m-0'>{this.props.userInfo.email}</p>
                    </div>
                    <a href='/' className="list-group-item list-group-item-action d-flex justify-content-between align-items-center" onClick={(e)=>{e.preventDefault()}}>
                        <span>Theme</span>
                    </a>
                    <a href='/' className="list-group-item list-group-item-action d-flex justify-content-between align-items-center" onClick={(e)=>{e.preventDefault();this.props.logout()}}>
                        <span className="text-danger">Log out</span>
                        <span class="badge">
                            <i class="fas fa-sign-out-alt h5 text-danger"></i>
                            </span>
                    </a>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) =>({
    userInfo: state.loginReducer.userInfo
})
const mapDispatchToProps = {logout}
export default connect(mapStateToProps, mapDispatchToProps) (RightSideBar);
