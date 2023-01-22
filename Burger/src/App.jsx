import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Homepage from './routes/Homepage'

//? This is the router for the app
const router = createBrowserRouter(
  [
    {
      errorElement: <a href='/'>BACK TO HOME</a>
    },
    {
      path: '/',
      element: <Homepage />
    },
    // {
    //   path: '/menu',
    //   element: <div>About</div>
    // },
    // {
    //   path: '/location',
    //   element: <div>About</div>
    // },
    // {
    //   path: '/about',
    //   element: <div>About</div>
    // },
    // {
    //   path: '/contact',
    //   element: <div>About</div>
    // },
    // {
    //   path: '/order-online',
    //   element: <div>About</div>
    // },
  ]


)


function App() {

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
