import './App.css';
import React, { useState } from "react";
import axios from "axios"
import Input from "./Components/Input"
function App() {
 const [users, setUsers] = useState([])
 const handleSearch = (query)=> {
    axios.get(`https://api.github.com/search/users?q=${query}`).then((res)=> {
      console.log(res.data.items)
      setUsers(res.data.items)
    })
 }
 
  return (
    <div className="App">
      <Input handleSearch={handleSearch}/>
    </div>
  );
}

export default App;
