
import { useSelector } from "react-redux"
import useFetch from "../hooks/useFetch"
import { useEffect, useRef, useState } from "react"
import PokeCard from "../components/pokedexpage/PokeCard"
import '../components/pokedexpage/styles/PokedexPage.css'
import PokeTypeList from "../components/pokedexpage/PokeTypeList"


const PokedexPage = () => {

const [inputValue, setInputValue] = useState('')

  
const trainer = useSelector(reducer => reducer.trainer)

const url = "https://pokeapi.co/api/v2/pokemon/?offset=20&limit=50"

const [pokemons, getAllPokemos ] = useFetch(url)



useEffect(() => {
  
getAllPokemos()


}, [])



const inputSearch = useRef()

const handleSubmit = e =>{
  e.preventDefault()
  setInputValue(inputSearch.current.value.trim().toLowerCase())
}




const cbFilter = poke => poke.name.includes(inputValue)
   


  return (
    
    <div className="poke__container">
      <header className="poke__header">
        <div className="poke__header-rectangle">
          <img className="poke__header-logo" src="/logopokedex.svg" alt="" />
        </div>
        <div className="poke__header-rectangle-2">
          <div className="poke__header-circle"></div>
          <div className="poke__header-circle-2"></div>
          </div>
        
      </header>
      <p className="poke__saludo"><span className="poke__name__trainer"> Wellcome {trainer} , </span>here you can find your favorite pokemon</p>
      <form className="poke__form__search" onSubmit={handleSubmit}>
        <input placeholder="Search pokemon" className="form__input" ref={inputSearch} type="text" />
        <button className="form__btn">Search</button>
        <PokeTypeList/>

      </form>
      
        <div className="poke__list">
          {
            pokemons?.results.filter(cbFilter).map(poke => (
              <PokeCard
                key={poke.url}
                url={poke.url}
              />
            ))
          }
        </div>
    </div>
  )
}

export default PokedexPage