import React from 'react'
import Conversation from './Conversation.jsx'
const AllConversations = () => {
  return (
    <div className='py-0 flex flex-col overflow-auto'>
        <Conversation></Conversation>
        <Conversation></Conversation>
        <Conversation></Conversation>
        <Conversation></Conversation>
        <Conversation></Conversation>
        <Conversation></Conversation>
    </div>
  )
}

export default AllConversations