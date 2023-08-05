import { useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setTrainerG } from "../store/slices/trainer.slices"
import { useNavigate } from "react-router-dom"
import '../components/pokedexpage/styles/HomePage.css'


const HomePage = () => {
 
  const trainer = useSelector(reducer => reducer.trainer )
console.log(trainer)

 const inputTrainer = useRef()
 const navigate = useNavigate()
 const dispatch = useDispatch()

  const handleSubmit = e => {
   e.preventDefault()
   dispatch(setTrainerG(inputTrainer.current.value.trim()))
   navigate('/pokedex')
   
  }

  return (
    <div className="home__container">
      <div className="image__container">
      <img className="home__image" src="/logopokedex.svg" alt="" />
      </div>
      <div className="leters__container">
      <h2 className="home__saludo">Hello trainer</h2>
      <p className="home__parrafo">To start, give me your name</p>
      </div>
      <form className="home__form"onSubmit={handleSubmit} >
        <input className="home__imput" ref={inputTrainer} type="text" />
        <button className="home__btn">Start</button>
      </form>
      <div className="home__rectangle">
        
      </div>
      <div className="home__rectangle-final">

        </div>

    </div>
  )
}

export default HomePage