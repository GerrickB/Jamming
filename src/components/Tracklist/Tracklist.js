import React from "react";
import "./Tracklist.css"
import { getImageUrl } from "../../utils/utils";
import { useState } from "react";
import { tracks } from "../Track/Track";

export default function Tracklist() {
  const [trackResults, setTrackResults] = useState([]);
  const listItems = tracks.map((track) => (
    <li key={track.id}>
      <img
        src={getImageUrl(track)} 
        alt={track.name}
      />
      <p>
        {track.name}
        <span>{<br/>}</span>
        {track.artist}
      </p>
      <button>PLUS</button>
    </li>
  ))
  return (
    <>
      <h2>Track List</h2>
      <ul>{listItems}</ul>
    </>
  )
}

/*
TO DO:
  make ul display: grid
  test play list beside track list
*/