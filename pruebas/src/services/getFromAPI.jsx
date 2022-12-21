import React from 'react'

export default async function getFromAPI({ id, ...props }) {

    await fetch('https://rest-apis.onrender.com/api/' + id)
        .then(response => response.json())
        .then(data => {
            props.setItemCallback(data)
        })
}
