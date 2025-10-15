import React, { useEffect, useState } from 'react'
import './Player.css'
import back_arrow_icon from '../../assets/back_arrow_icon.png'
import { Navigate, useNavigate, useParams } from 'react-router-dom'

const Player = () => {

  const {id} = useParams();
  const navigate = useNavigate();

  const [apidata, setapidata] = useState({
    name : "",
    key : "",
    published_at:"",
    typeof:""
  })

  const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NTVhZGQzMGU2NzE1ZmFjYjQyNjYzOGJiNDczZmRiMCIsIm5iZiI6MTc1Mzc3OTAyNi4zMiwic3ViIjoiNjg4ODhiNTJhOWMxZjY4OTNlMzkwNGI3Iiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.sHIRbxGzogwu2D3kx_OFP8-gPDyrZjtcMNFmVsKBxSI'
  }
};

useEffect(()=>{

fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
  .then(res => res.json())
  .then(res => setapidata(res.results[0]))
  .catch(err => console.error(err));

},[id])

  return (
    <div className='player'>
      <img src={back_arrow_icon} alt="Back" onClick={()=>{navigate(-2)}}/>
      <iframe
        width="90%"
        height="90%"
        src={`https://www.youtube.com/embed/${apidata.key}`}
        title="trailer"
        allowFullScreen
        frameBorder="0"
      ></iframe>
      <div className="player-info">
        <p>{apidata.published_at.slice(0,10)}</p>
        <p>{apidata.name}</p>
        <p>{apidata.type}</p>
      </div>
    </div>
  )
}

export default Player
