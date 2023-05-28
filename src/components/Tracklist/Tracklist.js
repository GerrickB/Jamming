import React from "react";
import "./Tracklist.css"
import { getImageUrl } from "../../utils/utils";
import { useState } from "react";
import { tracks } from "../Track/Track";
import Playlist from "../Playlist/Playlist";

export default function Tracklist() {
  
  const [playlist, setPlaylist] = useState([]);
  const [playlistName, setPlaylistName] = useState('');
  
  function handleDeleteClick() {
    playlist.map(song => (
      setPlaylist(
        playlist.filter(p =>
          p.id !== song.id
        )
      )
    ));
  }

  function handlePlaylistNameChange(e) {
    setPlaylistName(e.target.value);
  }

  const listAllTracks = tracks.map((track) => (
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
      <button onClick={() => {
        setPlaylist([
          ...playlist,
          { id: track.id, name: track.name } 
          // export object to Playlist component then convert to array
          // props.playlist.map
        ]);
      }}>
        +
      </button>
    </li>
  ))

  return (
    <div class="main-grid">
      <div class='track-list'>
        <h2>Track List</h2>
        <ul>{listAllTracks}</ul>
      </div>
      <div className="playlist">
        <input
          placeholder="Click to name/rename playlist"
          value={playlistName}
          onChange={handlePlaylistNameChange}
        />
        <h1>
          {playlistName}
        </h1>
        <Playlist newPlaylist={playlist} delete={handleDeleteClick} />
      </div>

    </div>
  )
}