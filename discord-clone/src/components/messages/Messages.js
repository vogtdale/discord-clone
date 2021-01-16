import { Avatar } from '@material-ui/core'
import React from 'react'
import "./Messages.css"


const Messages = () => {
    return (
       <div className="messages">
           <Avatar />
           <div className="messages__info">
               <h4>Dalo
                <span className="messages__timestamp">
                    Saturday 16 january
                </span>
               </h4>
               <p>this is the message </p>

           </div>
       </div>
    )
}

export default Messages
