import React, { useState } from "react"

export default function Input({handleSearch}) {
    const [query, setQuery] = useState("")
    return(
        <>
        <input placeholder="Search users" value={query} onChange={(e)=>setQuery(e.target.value)}/>
        <button onClick={()=>handleSearch(query)}>Search users</button>
        </>
    )
}