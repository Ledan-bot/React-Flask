import React, { useEffect, useState} from 'react';
import "./homepage.css"
import  tsLogo  from '../shared/TSlogo.png'
import jsLogo from '../shared/javascript.png'
import pyLogo from '../shared/python.png'
import htmlLogo from '../shared/html.png'
import cssLogo from '../shared/css3.png'



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
      <img src={jsLogo} alt="TypeScript logo" className="logo"/>
      <img src={pyLogo} alt="TypeScript logo" className="logo"/>
      <img src={htmlLogo} alt="TypeScript logo" className="logo"/>
      <img src={cssLogo} alt="TypeScript logo" className="logo"/>
    </>
  )
}