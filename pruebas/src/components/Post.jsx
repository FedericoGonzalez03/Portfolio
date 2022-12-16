import React from 'react'

export default function Post() {
    return (

        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
            marginTop: "20px",
        }}>
            <span>Post</span>
            <input type="text" />
            <input type="button" value="Try" />

        </div>
    )
}
