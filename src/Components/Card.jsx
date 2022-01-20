import React from "react"
export default function Card({prop}) {
  return (
      <>
      <div>
        {prop.map((item)=>item.map((user) =>{
            return(
                <div style={{display: "flex", border: "1px solid black", width: "60%", justifyContent: "space-evenly", margin: "2rem auto"}}>
                   <div > <img src={user.avatar_url} style={{height: "7rem", width: "100px"}}/></div>
                   <div>
                       <div>{user.login}</div>
                       <div>{user.url}</div>
                       <div>{user.repos_url}</div>
                   </div>
                </div>
            )
        }))}         
      </div>
      </>
  )
}