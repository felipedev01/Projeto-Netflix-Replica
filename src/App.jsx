import Tmdb from './Tmdb';
import React, {useEffect,useState} from 'react';


function App() {
   
  const [movieList, setMovieList]=useState([]);

  useEffect(()=>{

    const loadAll = async () => {
      
      let list = await Tmdb.getHomeList();
      setMovieList(list)

    }

    loadAll()

  },[]);
  

  return (
   <div className='page'>

    

   </div>
  )
}

export default App
