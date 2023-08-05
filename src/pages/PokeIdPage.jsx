import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import { useEffect } from "react"
import '../components/pokedexpage/styles/PokeIdPage.css'




const PokeIdPage = () => {

  const { id } = useParams()

  const url = `https://pokeapi.co/api/v2/pokemon/${id}/`

  const [pokemon, getSinglePokemon] = useFetch(url)

  useEffect(() => {
    getSinglePokemon()
  }, [id])
   


  const firstType = pokemon?.types[0].type.name
  return (
    <div>
        <header className="poke__header">
        <div className="poke__header-rectangle">
          <img className="poke__header-logo" src="/logopokedex.svg" alt="" />
        </div>
        <div className="poke__header-rectangle-2">
          <div className="poke__header-circle"></div>
          <div className="poke__header-circle-2"></div>
          </div>
          </header>
          <div className="container__id">
    <article className={`pokecard__id ${firstType}-border`} >
      <header className={`pokecard__header ${pokemon?.types[0].type.name}-gradient`}>
      <img  className='pokecard__image__id' src={pokemon?.sprites.other['official-artwork'].front_default} alt="" />

      </header>
      <section className="pokecard__body__id"> 
             <h3 className="pokecard__#__id">#{pokemon?.id}</h3>
            <h3 className={`pokecard__name ${firstType}-color`}>{pokemon?.name}</h3>
            <ul>
              <li>
                <h4><span></span></h4>
              </li>
            </ul>
            <ul className="pokecard__types__id">
                {
                    pokemon?.types.map(typeInfo => (
                        <li className="pokecard__typename__id" key={typeInfo.type.url}>{typeInfo.type.name}</li>
                    ))
                }
            </ul>
            <hr className="pokecard__hr__id" />
            <ul className="pokecard__stats__id">
                {
                    pokemon?.stats.map(statInfo => (
                        <li className="pokecard__stat__id" key={statInfo.stat.url}>
                            <h4 className="pokecard__state__name__id">{statInfo.stat.name}</h4>
                            <span className={`pokecard__state__value__id ${firstType}-color`}>{statInfo.base_stat}</span>
                            <div className="progres "><div className={`progres__bar ${pokemon?.types[0].type.name}-gradient`}></div></div>
                            
                        </li>
                    ))
                }
            </ul>
            </section>
            <h3 className="pokecard__name__move">Movements</h3>
            <hr className="pokecard__hr__id"/>
            <ul className="pokecard__move">{pokemon?.moves.map(movesInfo => (
                        <li className="pokecard__move__id" key={movesInfo.move.url}>
                            <h4 className="pokecard__move__name__id">{movesInfo.move.name}</h4>
                        </li>
                    ))}</ul>
      
    </article>

          </div>
    </div>
     
  )
}

export default PokeIdPage