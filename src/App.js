import './App.css';
import React, { useState } from "react";
import axios from "axios"
import Input from "./Components/Input"
import Card from "./Components/Card"
function App() {
 const [users, setUsers] = useState([])
 const [isLoading, setLoading] = useState(true)
 const handleSearch = async (query)=> {
   await axios.get(`https://api.github.com/search/users?q=${query}`).then((res)=> {
      // console.log(res.data.items)
      setLoading(false)
      setUsers([...users,res.data.items])
      // console.log(users)
    })
 }
 
  return (
    <div className="App">
      <h1>Github Users</h1>
      <Input handleSearch={handleSearch}/>
     {isLoading ? <h3>...Loading</h3>: <Card prop={users}/>}
    </div>
  );
}

export default App;
