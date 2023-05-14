import React from "react";
import "./Tracklist.css"
import { useState } from "react";
import { tracks } from "../Track/Track";

export default function Tracklist() {
  const [trackResults, setTrackResults] = useState([]);

  return (
    <>
      <h2>Track List</h2>
      <ul>
        {tracks.map((track) => (
          <li key={track.id}>
            {track.name} <button>PLUS</button>
            <hr/>
          </li>
        ))}
      </ul>
    </>
  )

}