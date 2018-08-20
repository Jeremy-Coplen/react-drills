import React, {Component} from "react"

class NewTask extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userInput: ""
        }
    }

    updateInput(val) {
        this.setState({
            userInput: val
        })
    }

    addTask() {
        this.props.updateTask(this.state.userInput)
        
        this.setState({
            userInput: ""
        })
    }

    render() {
        return (
            <div>
                <input type="text"
                placeholder="Enter Task"
                value={this.state.userInput}
                onChange={e => this.updateInput(e.target.value)}/>
                <button
                onClick={() => this.addTask()}>Add</button>
            </div>
        )
    }
}

export default NewTask