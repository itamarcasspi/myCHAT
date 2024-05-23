import React from 'react'
import SearchInput from './SearchInput.jsx'
import AllConversations from './AllConversations.jsx'
import LogoutButton from './LogoutButton.jsx'


const Sidebar = () => {
  return (
    <div className='border-r border-slate-500 p-4 flex flex-col'>
        <SearchInput></SearchInput>
        <div className='divider px-3'></div>
        <AllConversations/>
        <LogoutButton/> 
    </div>
  )
}

export default Sidebar