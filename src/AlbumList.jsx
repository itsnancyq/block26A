import { useState, useEffect } from "react"

function AlbumList ({ albums, setAlbums, trackList, setSeeDetails}){

    const getAlbums  = async () =>{
        const res = await fetch('https://taylor-swift-api.sarbo.workers.dev/albums')
        const data = await res.json()
        setAlbums(data)
        console.log(data)
      }

        useEffect(()=>{
          
            getAlbums()
            
        }, [])
        
    return(
        <>
        {
            albums.map((album)=> 
                <div key={album.album_id}>    
                    <h2>{album.title}</h2>
                    <button onClick={()=> setSeeDetails(album.album_id)}>Details</button>
                </div>
            )
        }
        </>
    )
}

export default AlbumList