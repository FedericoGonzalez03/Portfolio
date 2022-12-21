import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Item from './pages/Item'

const router = createBrowserRouter([

    { path: '/', element: <Home name="Hola Mundo"/> },
    { path: '/item/:id', element: <Item /> }

])


function App() {

    return (
        <div>
            <RouterProvider router={router} />
        </div>
    )
}

export default App
