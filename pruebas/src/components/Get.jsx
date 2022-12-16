import React from 'react'


const getFromAPI = (id) => {
    fetch('https://myrestapis.online/api/'+id)
        .then(response => response.json())
        .then(data => console.log(data))
}


export default function Get() {

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
                onClick={() => { getFromAPI(document.getElementById('getText').value) }}
            />

        </div>
    )
}

