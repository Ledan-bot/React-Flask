import React, { useEffect, useState} from 'react';
import "./homepage.css"
import tsLogo from '../shared/TSlogo.png'

export default function HomePage() {
  let [users, updateUsers] = useState(0)


  useEffect(() => {
    document.title = users.toString()
  })
  return (
    <>
      <h1>Users: {users}</h1>
      <button onClick={() => {updateUsers(users + 1)}}>Add User</button>
      <br />
      <img src={tsLogo} alt="TypeScript logo" className="logo"/>
    </>
  )
}