import React from 'react'

const SearchBar = ({search, setSearch, fetchData}) => {
    const handleClick = () => {
        fetchData(search.toLowerCase())
    }
  return (
    <main className='w-3/5 flex flex-col gap-4 mx-auto p-4 rounded-lg bg-[#b33636]'>
        <h2 className='text-center text-white font-bold faculty text-3xl'>Busca a tu personaje de Dragon Ball</h2>
        <div className='flex justify-center gap-8'>
            <input 
                type="text" 
                className="w-full py-1 px-2 border-b-2 border-[#ff9999] transition-all focus:border-[#ff4d4d] bg-transparent outline-none text-white montserrat"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={ e => e.key === 'Enter' && fetchData(search.toLowerCase()) }
            />
            <button onClick={handleClick} className='rounded-lg bg-[#ff751a] p-3 text-white'>
                <svg className='text-white fill-white' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path></svg>
            </button>
        </div>
    </main>
  )
}

export default SearchBar