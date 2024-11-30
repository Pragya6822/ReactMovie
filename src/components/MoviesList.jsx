import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { AdminContext } from '../context/AdminContext';

const MoviesList = () => {
    const [movies, setMovies] = useState([]);
    const {isAdmin, setIsAdmin} = useContext(AdminContext);
    
    async function getMovies(){
        try {
            let res  = await axios.get('https://fir-e0ae3-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json');
            
            let arr = [];
    
            for(let key in res.data){
                arr.push({id:key, ...res.data[key]})
            }
    
            setMovies([...arr]);
        } catch (error) {
            console.error(error);
        }
    }

    async function handleDelete(id){
        try {
            await axios.delete(`https://fir-e0ae3-default-rtdb.asia-southeast1.firebasedatabase.app/movies/${id}.json`);
            getMovies()
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(()=>{
        getMovies()
    },[])
  return (
    <div >
        <button onClick={()=> setIsAdmin(!isAdmin)}>{isAdmin ? "You are a admin" : "CLick the button to become admin"}</button>
        <h1>Movies List</h1>
        <div className='movie-container'>
            {movies.map((movie)=>(
                <div key={movie.id} className='movie-item'>
                    <h4>{movie.title}</h4>
                    <p>{movie.description}</p>
                    <p>{movie.year}</p>
                    <Link to={`/edit/${movie.id}`}>Edit ✍🏻</Link>

                    {isAdmin && (<button onClick={()=> handleDelete(movie.id)}>Delete 🗑️</button>)}
                    
                </div>
            ))}
        </div>
    </div>
  )
}

export default MoviesList

// Fetch --> obj of obj --> array of obj ---> store in state --> mapping it to UI