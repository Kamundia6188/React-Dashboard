





import Single from '../../components/single/Single'
import { singleUser } from '../../data'
import './user.scss'
import React from 'react'

function User() {
  return (
    <div className="user">
        <Single {...singleUser}/>
    </div>
  )
}

export default User