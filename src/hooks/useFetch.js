import axios from 'axios'
import{ useState } from 'react'

const useFetch = (url) => {
  

  const [infoApi, SetInfoApi] = useState()
  
  const getApi = () => {

    axios.get(url)
    .then(res => SetInfoApi( res.data))
    .catch(err => console.error(err))
  }

  return [ infoApi, getApi ]
}

export default useFetch