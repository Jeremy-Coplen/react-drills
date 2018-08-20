import React from "react"

export default function Todo(props) {
    console.log("Todo props", props)
    let displayTodo = props.todoArray.map((item ,i) => {
        return (
            <h2 key={i}>{item}</h2>
        )
    })
    return (
        <div>
            {displayTodo}
        </div>
    )
}