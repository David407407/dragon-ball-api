import { useEffect, useState } from 'react'
import SearchBar from './components/SearchBar'
import InfoCharacter from './components/InfoCharacter'
import './App.css'

function App() {
  const [character, setCharacter ] = useState({})
  const [search, setSearch] = useState('')
  const [loadAnimation, setLoadAnimation] = useState(false)

  const fetchData = async () => {
    try {
      const response = await fetch(`https://dragonball-api.com/api/characters?name=${search}`)
      const data = await response.json()
      setCharacter(data[0])
      setLoadAnimation(true)
      
    } catch (error) {
      console.error('Error fetching data: ', error )
    }
  }

  return (
    <>
      <main className='my-4 flex flex-col gap-8'>
        <h1 className='faculty text-[#ff4d4d] font-bold uppercase text-4xl text-center'>Busca a tu personaje de Dragon Ball</h1>
        <SearchBar search={search} setSearch={setSearch} fetchData={fetchData} />
        {
          Object.keys(character).length > 0 && (
            <InfoCharacter loadAnimation={loadAnimation} character={character} />
          )
        }
      </main>
    </>
  )
}

export default App
