import React, {Component} from "react"

export default class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: "",
            password: ""
        }
    }

    updateUsername(val) {
        this.setState({
            username: val
        })
    }

    updatePassword(val) {
        this.setState({
            password: val
        })
    }

    login() {
        alert(`Username: ${this.state.username} Password: ${this.state.password}`)
    }

    render() {
        return (
            <div>
                <input type="text"
                placeholder="Enter Username"
                onChange={(e) => this.updateUsername(e.target.value)}
                value={this.state.username}/>
                <input type="text"
                placeholder="Enter Password"
                onChange={(e) => this.updatePassword(e.target.value)}
                value={this.state.password}/>
                <button
                onClick={() => this.login()}>Login</button>
            </div>
        )
    }
}