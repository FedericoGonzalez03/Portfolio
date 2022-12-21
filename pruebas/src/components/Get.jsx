import React, { useEffect, componentDidMount } from 'react'
import getFromAPI from '../services/getFromAPI'




export default function Get({setItemCallback}) {
    
    useEffect(() => {
        getFromAPI({id: 1, setItemCallback})
    }, [])

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
                onClick={async () => { getFromAPI({id: document.getElementById('getText').value, setItemCallback})}}
            />

        </div>
    )
}

