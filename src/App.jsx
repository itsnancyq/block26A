import { useState, useEffect } from 'react'
import './App.css'
import AlbumList from './AlbumList'
import TrackList from './TrackList'

function App() {
  const [albums, setAlbums] = useState([])
  const [track, setTrack] = useState(null)
  const [seeDetails, setSeeDetails] = useState("")


  return (
    <div>
      { seeDetails ?
        <TrackList track={track} setTrack={setTrack} seeDetails={seeDetails}/>
        :
        <AlbumList albums={albums} setAlbums={setAlbums} setSeeDetails={setSeeDetails}/>
      }
        </div>
      )
    }

export default App
