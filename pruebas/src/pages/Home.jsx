import React, { useState, useCallback, useEffect } from 'react'
import Get from '../components/Get'
import Post from '../components/Post'


const Home = () => {

    const [method, setMethod] = useState('get')

    const [item, setItem] = useState({
        id: 0,
        codigo: ' 773022542 ',
        nombre: ' Libro de prueba ',
        descripcion: ' Libro de prueba ',
        categoria: ' Libros ',
        medida: '5cm x 5cm x 5cm',
        precio: 100,
        imagen: 'https://upload.wikimedia.org/wikipedia/commons/1/1e/RPC-JP_Logo.png'
    })





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
            {method === 'get' && <Get setItemCallback={setItem}/>}
            {method === 'post' && <Post />}

            {item!=undefined? <div>
                <span>Item</span>
                <div>
                    <div>id: {item.id}</div>
                    <div>codigo: {item.codigo}</div>
                    <div>nombre: {item.nombre}</div>
                    <div>descripcion: {item.descripcion}</div>
                    <div>categoria: {item.categoria}</div>
                    <div>medida: {item.medida}</div>
                    <div>precio: {item.precio}</div>
                    <img style={{width:'100px'}} src={item.imagen}/>
                </div>
            </div> : <div></div>}
        </div>
    )
}

export default Home