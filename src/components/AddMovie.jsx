import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const AddMovie = () => {
    const [movie, setMovie] = useState({title:"", description:"", year:""})
    const navigate = useNavigate() // initialize the navigate hook

    function handleChange(e){
        // console.log(e)
        const {name, value} = e.target;
        setMovie({...movie, [name]:value}); // title , update movie state
    }

    async function handleAdd(){
        try {
          await axios.post('https://fir-e0ae3-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json', movie)
          alert('Movie added successfully')
          navigate('/')   // Connect the path to your movielist route
        } catch (error) {
          console.log(error)
        } 
    }

  return (
    <div>
        <h1>Add Movie</h1>
        <input type="text" name='title' placeholder='Enter the movie name' value={movie.title} onChange={handleChange}/>
        <input type="text" name='description' placeholder='Add the description' value={movie.description} onChange={handleChange}/>
        <input type="text" name='year' placeholder='Mention the release year' value={movie.year} onChange={handleChange}/>
        <button onClick={handleAdd}>Add Movie</button>
    </div>
  )
}

export default AddMovie;