import { useState, useEffect } from 'react'

function TrackList ({ track, setTrack, seeDetails}) {
  
    useEffect(()=>{
        const track =  async() => {
            const res = await fetch(`https://taylor-swift-api.sarbo.workers.dev/albums/${seeDetails}`)
            const data = await res.json()
            setTrack(data)
            console.log(data)
        }
        track()
    },[])
    console.log(track)

    return (
        <div>
           {
             track && (
                track.map((song)=>(
                    <div key={song.song_id}>
                        <h2>{song.title}</h2>
                    </div>
                ))
             )
           }
        </div>
    )
}

export default TrackList