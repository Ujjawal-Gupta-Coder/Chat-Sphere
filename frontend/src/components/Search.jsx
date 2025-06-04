import React from 'react'
import { Search as SearchIcon } from 'lucide-react';
import messagesStore from '../store/messagesStore';

const Search = () => {
  const {searchInput, setSearchInput} = messagesStore();
  const handleInputChange = (e) => {
    setSearchInput(e.target.value)
  }
  return (
    <div className='flex justify-center items-center border-1 rounded-lg p-2 gap-2  h-[40px]'> 
    <SearchIcon />
    <input type='text' onChange={handleInputChange} className='outline-none font-bold w-full' placeholder='Search Contact ...' value={searchInput} />
    </div> 
  )
}

export default Search
