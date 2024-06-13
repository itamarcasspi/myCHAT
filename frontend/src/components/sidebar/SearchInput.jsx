import React, { useState } from 'react'
import { IoSearchSharp } from "react-icons/io5";
import useGetConversations from '../../hooks/useGetConversations';
import useConversation from '../../../zustand/useConversation';
import toast from 'react-hot-toast';

const SearchInput = () => {
  const [SearchValue,setSearchValue] = useState();
  const {setSelectedConversation} = useConversation();
  const {conversations} = useGetConversations();

  const handleSubmit = (e) => {

    e.preventDefault();

    if(!SearchValue) return;
    const search = conversations.find((c) => c.fullName.toLowerCase().includes(SearchValue.toLowerCase()));

    if(search)
      {
        setSelectedConversation(search);
        setSearchValue("");
      }else{
        toast.error("No such user found");
      }
  }


  return (
    <form onSubmit={handleSubmit} className='flex items-center' >
        <input type="text" placeholder='Search User..' className='input input-bordered rounded-full'
        onChange={(e) => setSearchValue(e.target.value)} value={SearchValue}/>
        <button type='submit' className='btn btn-circle bg-sky-500 text-white'>
            <IoSearchSharp className='w-6 h-6 outline-none'/>
        </button>
    </form>
  )
}

export default SearchInput