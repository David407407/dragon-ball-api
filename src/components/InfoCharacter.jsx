import React from 'react'

const InfoCharacter = ({loadAnimation, character}) => {
  return (
    <div className='bg-[#b33636] text-white w-3/5 mx-auto montserrat rounded-lg flex flex-col p-6 gap-2'>
        { loadAnimation ? (
            <div className='relative'>
                <img className='w-32 mx-auto pl-4 py-3' src={character.image} alt={`${character.name} sprite`} />
            </div>
          ) : (
            <div className="loader"></div>
          )
        }
        <h2><p className='font-bold faculty text-2xl text-center'>{character.name.charAt(0).toUpperCase() + character.name.slice(1)}</p></h2>
        <div className='grid grid-cols-2 gap-4'>
            <div>
                <h2>Nombre: <span>{character.name}</span></h2>
                <h2>Ki: <span>{character.ki}</span></h2>
            </div>
            <div>
                <h2>Raza: <span className='font-bold'>{character.race}</span></h2>
                <h2>Género: <span className='font-bold'>{character.gender}</span></h2>
            </div>

            <div className='col-start-1 col-end-3'>
                <h2>Descripcion: <span>{character.description}</span></h2>

            </div>
        </div>
        

    </div>
  )
}

export default InfoCharacter