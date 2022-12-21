import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import getFromAPI from '../services/getFromAPI'


export default function Item() {

  const { id } = useParams()

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



  useEffect(() => {
    getFromAPI({ id, setItemCallback: setItem })
  }, [])


  return (
    <div id='itemitemitem'>
      {item != undefined ?
        <div>
          <span>Item</span>
          <div>
            <div>id: {item.id}</div>
            <div>codigo: {item.codigo}</div>
            <div>nombre: {item.nombre}</div>
            <div>descripcion: {item.descripcion}</div>
            <div>categoria: {item.categoria}</div>
            <div>medida: {item.medida}</div>
            <div>precio: {item.precio}</div>
            <img style={{ width: '200px' }} src={item.imagen} />

          </div>
        </div>
        :
        <div></div>
      }
    </div>

      )
}
