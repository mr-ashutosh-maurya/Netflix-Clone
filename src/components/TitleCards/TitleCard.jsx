import React, { useState } from 'react'
import './TitleCard.css'
import cards_data from '../../assets/cards/Cards_data'
import { Link } from 'react-router-dom';

const TitleCard = ({title,category}) => {
  const [apidata, setapidata] = useState([]);
  //Api mtdb
  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NTVhZGQzMGU2NzE1ZmFjYjQyNjYzOGJiNDczZmRiMCIsIm5iZiI6MTc1Mzc3OTAyNi4zMiwic3ViIjoiNjg4ODhiNTJhOWMxZjY4OTNlMzkwNGI3Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.sHIRbxGzogwu2D3kx_OFP8-gPDyrZjtcMNFmVsKBxSI'
  }
};

fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
  .then(res => res.json())
  .then(res => setapidata(res.results))
  .catch(err => console.error(err));

  //
  return (
    <div className='title-cards'>
      <h2>{title?title:"Popular on Netflix"}</h2>
      <div className="card-list">
        {apidata.map((card, index) => {
          return <Link to={`/player/${card.id}`} className="card" key={index}>
            <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" />
            <p>{card.original_title}</p>
          </Link>
        })}
      </div>
    </div>
  )
}

export default TitleCard