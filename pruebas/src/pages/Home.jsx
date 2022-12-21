import React, { useState, useCallback, useEffect } from 'react'
import Get from '../components/Get'
import Post from '../components/Post'


const Home = () => {

    const [method, setMethod] = useState('get')

    const [item, setItem] = useState([{
        id: 0,
        codigo: ' 773022542 ',
        nombre: ' Libro de prueba ',
        descripcion: ' Libro de prueba ',
        categoria: ' Libros ',
        medida: '5cm x 5cm x 5cm',
        precio: 100,
        imagen: 'https://upload.wikimedia.org/wikipedia/commons/1/1e/RPC-JP_Logo.png'
    }])

    const dataSetter = async () => {
        await fetch('https://rest-apis.onrender.com/api').then(response => response.json())
            .then(data => {
                setItem(data)
            })
    }

    useEffect(() => {
        console.log(item)
    }, [item])



    return (
        <div>
            <label htmlFor="method">Method: </label>
            <select id="method"
                onChange={(e) => {
                    setMethod(e.target.value)
                    if (e.target.value === 'post') {
                        dataSetter()
                        console.log(item)
                    }
                }}
            >
                <option value="get">GET</option>
                <option value="post">POST</option>
            </select>
            {method === 'get' && <Get setItemCallback={setItem} />}
            {method === 'post' && <Post />}

            {item[0] != undefined && method === 'get' ?
                <div>
                    <span>Item</span>
                    <div>
                        <div>id: {item[0].id}</div>
                        <div>{item[0].nombre}</div>
                        <div>${item[0].precio}</div>
                        <img style={{ width: '100px' }} src={item[0].imagen} />
                        <div>
                            <a href={"/item/" + item[0].id}>Ver mas</a>
                        </div>
                    </div>
                </div>
                :
                item != undefined && method === 'post' ?
                    item.map( (item) => {
                         
                            <div>
                                <span>Item</span>
                                <div>
                                    <div>id: {item.id}</div>
                                    <div>{item.nombre}</div>
                                    <div>${item.precio}</div>
                                    <img style={{ width: '100px' }} src={item.imagen} />
                                    <div>
                                        <a href={"/item/" + item.id}>Ver mas</a>
                                    </div>
                                </div>
                            </div>

                         
                        }
                    )
                    :
                    <div></div>

            }
        </div>
    )
}

export default Home