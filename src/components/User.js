import React, { Component } from 'react'

export default class extends Component {
    render() {
        return (
            <div className="login">
                <input type="text"
                    placeholder="enter name"
                    name="user" onChange={(event) => this.setState({ name: event.target.value })} /> <br /> <br />
                <input
                    placeholder="enter password"
                    type="password" name="password" onChange={(event) => this.setState({ password: event.target.value })} /> <br /> <br />
                <div className="pwd">
                <button onClick={() => {}} >Change Password</button>
                <button onClick={() => { this.logout() }} >Logout</button>
            </div>
            </div>
        )
    }
}
