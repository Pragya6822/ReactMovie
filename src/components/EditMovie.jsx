import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const EditMovie = () => {
  const { id } = useParams(); // url --> it will aces the url
  const [movie, setMovie] = useState({ title: "", description: "", year: "" });
  // console.log(id);

  async function getMovie() {
    let res = await axios.get(
      `https://fir-e0ae3-default-rtdb.asia-southeast1.firebasedatabase.app/movies/${id}.json`
    );
    setMovie(res.data);
  }

  function handleChange(e) {
    // console.log(e)
    const { name, value } = e.target;
    setMovie({ ...movie, [name]: value }); // title
  }

  async function handleUpdate(){
    await axios.put(`https://fir-e0ae3-default-rtdb.asia-southeast1.firebasedatabase.app/movies/${id}.json`, movie)
  }

  useEffect(() => {
    getMovie()
  }, []);
  return (
    <div>
      <h1>Edit Movie</h1>
      <input
        type="text"
        name="title"
        placeholder="Enter the movie name"
        value={movie.title}
        onChange={handleChange}
      />
      <input
        type="text"
        name="description"
        placeholder="Add the description"
        value={movie.description}
        onChange={handleChange}
      />
      <input
        type="text"
        name="year"
        placeholder="Mention the release year"
        value={movie.year}
        onChange={handleChange}
      />
      <button onClick={handleUpdate}>Update Movie</button>
    </div>
  );
};

export default EditMovie;

// we should get id here --> we make get request --> fill input boxes with fetched data --> make some chnages and update ---> repost( updated data );
