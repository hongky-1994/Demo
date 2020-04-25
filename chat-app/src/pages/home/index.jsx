import React, { Component } from 'react'
import {connect} from 'react-redux'


import RightSideBar from './components/rightSideBar'

class HomePage extends Component {
    state={
        openRightSideBar: false
    }
    openRightSideBar=(e)=>{
        e.preventDefault()
        this.setState({
            openRightSideBar: !this.state.openRightSideBar
        })
    }
    render() {
        return (
            <section className='d-flex flex-column home-page container-fluid w-100'>
                <div className="row flex-grow-1">
                    <div className='side-bar-left col-sm-2 bg-primary'>Left side bar</div>
                    
                    {/* MAINCHAT */}

                    <div className='current-chat col  bg-info d-flex flex-column p-0'>
                        <div className="current-chat__header bg-white p-4 d-flex">
                            <div className="col d-flex">
                                <div className='avata-container bg-secondary rounded-circle'><i className="fas fa-user h1 text-light"></i></div>
                                <div className="ml-3">
                                    <h3>User Name</h3>
                                    <p>Status</p>
                                </div>
                            </div>
                            <div className="col-1 d-flex justify-content-center align-items-center">
                                <ul className="nav nav-pills">
                                    <li className="nav-item">
                                        <a href="/" className="nav-link active rounded-circle" onClick={this.openRightSideBar}>
                                            <i className="fas fa-info "></i>

                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="current-chat__message-container flex-grow-1 p-4">
                            <div className='message row'>
                                <span className=" message-chat bg-white rounded p-2 m-2 shadow">Hello</span>
                            </div>
                            <div className='message row your'>
                                <span className=" message-chat bg-white rounded p-2 m-2 shadow ml-auto">Hello there!!!!!!!!!!!!!!!!</span>
                            </div>
                            <div className='message row your'>
                                <span className=" message-chat bg-white rounded p-2 m-2 shadow ml-auto">Since 2006, Family Friend Poems has been a showcase of Popular Poems by Amatuer, Contemporary and Famous Poets. These poems express loving, healing and touching feelings that we all can relate to. We now have over 8,000 published poems. We feature poems about all life's experiences and for all occasions.<br/><br/>The list of most popular poems is curated using a variety of metrics to showcase our best poems. We consider ratings, shares, and comments. In combination with our editors' recommended poems based on poetic techniques, we bring you the best poems on Family Friend Poems.</span>
                            </div>
                            <div className='message row your'>
                                <span className=" message-chat bg-white rounded p-2 m-2 shadow ml-auto">HEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEELLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!.</span>
                            </div>
                        </div>
                        <form action="" className="row justify-self-end px-3 m-0">
                            <div className="input-group mb-3 px-4">
                                <input type="text" className="form-control" placeholder="Enter your message here!!!"/>
                                <div className="input-group-append ">
                                    <button type="submit" className="btn btn-primary w-100 px-5"><i class="far fa-paper-plane"></i></button>
                                </div>
                            </div>
                        </form>
                    </div>
                    {this.state.openRightSideBar && <RightSideBar />}


                    
                </div>
            </section>
        )
    }
}
const mapDispatchToProps = {}
export default connect(null, mapDispatchToProps) (HomePage);