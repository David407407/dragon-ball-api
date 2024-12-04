import React from 'react'
import WhosThat from '../assets/whosthat.jpeg'

const InfoPokemon = ({loadAnimation, pokemon}) => {

  return (
    <div className='bg-[#b33636] w-96 mx-auto montserrat rounded-lg flex flex-col p-6 gap-2'>
        { loadAnimation ? (
            <div className='relative'>
                <img src={WhosThat} alt="Image of Who's That Pokemon" className='rounded-lg w-full' />
                <img className='w-44 mx-auto absolute top-0 left-0 pl-4 py-3' src={pokemon.sprites.front_default} alt={`${pokemon.name} sprite`} />
            </div>
          ) : (
            <div className="loader"></div>
          )
        }
        <h2><p className='font-bold faculty text-2xl text-center'>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</p></h2>
        <div className='grid grid-cols-2 gap-4'>
            <div>
                <h2>Pokedex: <span>{pokemon.order}</span></h2>
                <h2>Tipo(s):</h2>
                <ul className='list-disc pl-4'>
                    {pokemon.types.map(typeInfo => (
                        <li key={typeInfo.type.name}>
                        {typeInfo.type.name.charAt(0).toUpperCase() + typeInfo.type.name.slice(1)}
                        </li>
                    ))}
                </ul>
                <h2>Habilidades:</h2>
                <ul className='list-disc pl-4'>
                    {pokemon.abilities.map(abilityInfo => (
                        <li key={abilityInfo.ability.name}>
                        {abilityInfo.ability.name.charAt(0).toUpperCase() + abilityInfo.ability.name.slice(1)}
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h2>Estadísticas:</h2>
                <ul className='list-disc pl-4'>
                    {pokemon.stats.map(statInfo => (
                        <li key={statInfo.stat.name}>
                        {statInfo.stat.name.charAt(0).toUpperCase() + statInfo.stat.name.slice(1)}: {statInfo.base_stat}
                        </li>
                    ))}
                </ul>
                <h2>Peso: <span className='font-bold'>{pokemon.weight / 10} kg</span></h2>
                <h2>Altura: <span className='font-bold'>{pokemon.height / 10} m</span></h2>
            </div>
        </div>
        

    </div>
  )
}

export default InfoPokemon