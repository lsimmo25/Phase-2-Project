import React, { useState } from "react";

export default function Form() {

    const [name, setName] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("test")
    }

    return(
        <form onSubmit={handleSubmit}>
            <input value={name} onChange={(e) => setName(e.target.value)}/>
            <input type="submit"/>
        </form>
    )
}