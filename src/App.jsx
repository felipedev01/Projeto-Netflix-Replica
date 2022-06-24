import Tmdb from './Tmdb';
import React, {useEffect} from 'react';


function App() {

  useEffect(()=>{

    const loadAll = async () => {
      
      let list = await Tmdb.getHomeList();
      console.log(list)

    }

    loadAll()

  },[]);
  

  return (
   <h1>Hello World!</h1>
  )
}

export default App
