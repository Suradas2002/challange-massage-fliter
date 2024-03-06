import './App.css'
import { useState } from 'react'

//mock data
import userData from './userData'

function App() {
  const [showData, setShowData] = useState(userData)
  const[value,setValue] = useState("")

  return (
    <div className='container'>
      <div className='header'>
        <div className='header-box'>
          <button className='proflie-back'><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="14px" height="14px" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="#878787" d="M16.62 2.99a1.25 1.25 0 0 0-1.77 0L6.54 11.3a.996.996 0 0 0 0 1.41l8.31 8.31c.49.49 1.28.49 1.77 0s.49-1.28 0-1.77L9.38 12l7.25-7.25c.48-.48.48-1.28-.01-1.76z"></path></svg></button>
        <span className='proflie-name'>Your Name</span>
        <span className='proflie-location'>BangKok, Thailand</span>
        <input   type='text' placeholder='Search...' className='search' onChange={e=> setValue(e.target.value)}/>
        </div>
      </div>
      <div className='main'>
          <div className='user-list'>
        {showData.filter(user => user.first_name.toLocaleLowerCase().includes(value) || user.last_name.toLocaleLowerCase().includes(value)).map((user) => {
         return(<div className='user-list-box'>
        <div className='image-avata'>
            <img src = {user.avatar} alt = "placehoder" />
        </div>

            <div className='box'>
              <div className='user-name' key={user.id}>{`${user.first_name} ${user.last_name} `}</div>
              <div className='email' key={user.id}>{user.email}</div>
            </div>
            <div className="contact"><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="1.5em" height="1.5em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="#c3c3c3" d="M5 2c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h3.586L12 21.414L15.414 18H19c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2H5zm14 14h-4.414L12 18.586L9.414 16H5V4h14v12z"></path><path fill="#c3c3c3" d="M7 7h10v2H7zm0 4h7v2H7z"></path></svg>
            </div>
            <hr></hr>
          </div>
          
         ) 
        })}
      </div>
      </div>
      
    </div>
  )
}

export default App