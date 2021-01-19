import { Avatar } from '@material-ui/core'
import React from 'react'
import "./Messages.css"


const Messages = ({message, user, timestamp}) => {
    return (
       <div className="messages">
           <Avatar src={user.photo}/>
           <div className="messages__info">
               <h4>{user.name.substring(0,7)}
                <span className="messages__timestamp">
                {new Date(timestamp?.toDate()).toUTCString()}
                </span>
               </h4>
               <p>{message} </p>

           </div>
       </div>
    )
}

export default Messages
