import React from "react"

function List(props) {
    let taskArr = props.taskArr.map((item, i) => {
        return (
            <h2 key={i}>{item}</h2>
        )
    })
    return (
        <div>
            {taskArr}
        </div>
    )
}

export default List