import React, { useEffect } from 'react'





export default function Get({setItemCallback}) {

    useEffect(() => {

        setItemCallback(getFromAPI(1))
    }, [])
    
    const getFromAPI = async (id) => {
        await fetch('https://myrestapis.online/api/'+id)
            .then(response => response.json())
            .then(data => {
                setItemCallback(data[0])
            })
    }


    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            marginTop: "20px",
        }}>

            <span>Get</span>

            <input id='getText' type="text" />
            <input type="button" value="go" 
                onClick={async () => { getFromAPI(document.getElementById('getText').value)}}
            />

        </div>
    )
}

