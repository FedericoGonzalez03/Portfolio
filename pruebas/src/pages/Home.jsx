import React, { createElement, useState } from 'react'
import Get from '../components/Get'
import Post from '../components/Post'


const Home = () => {

    const [method, setMethod] = useState('get')

    return (
        <div>
            <label htmlFor="method">Method: </label>
            <select id="method"
                onChange={(e) => {
                    setMethod(e.target.value)
                }}
            >
                <option value="get">GET</option>
                <option value="post">POST</option>
            </select>
            { method === 'get' && <Get /> }
            { method === 'post' && <Post /> }

        </div>
    )
}

export default Home