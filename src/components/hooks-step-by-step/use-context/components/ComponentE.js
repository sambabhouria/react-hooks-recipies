import React, { useContext } from 'react'
import ComponentF from './ComponentF'
import { UserContext, ChannelContext } from '../UseContextAppAdvanced'

function ComponentE() {

  const user = useContext(UserContext)
  const channel = useContext(ChannelContext)
  return (
         <div className="row">
          <div className="col">
            <h2> Here we use useContext() from hooks  </h2>      
            User is {user} and channel is {channel}
         </div>
           <div className="col">
           <h2> Here we use use classic context api   </h2>  
            < ComponentF />
            </div>
        </div>
  ) 
}

export default ComponentE