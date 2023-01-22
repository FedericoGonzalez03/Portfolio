import React, { Fragment } from 'react'



function Homepage() {
    return (

        <Fragment>

            <div className="App">

                <nav>
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/menu">Menu</a>
                        </li>
                        <li>
                            <a href="/location">Location</a>
                        </li>
                        <li>
                            <a href="/about">About</a>
                        </li>
                        <li>
                            <a href="/contact">Contact</a>
                        </li>
                        <li>
                            <a href="/order-online">Order</a>
                        </li>
                    </ul>
                </nav>

                <h2>Hamburguesería</h2>
                <h1>Lo de Federico</h1>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor minima placeat,
                    eos natus laboriosam exercitationem voluptas asperiores
                    a maiores, quam tenetur. Vitae cum laboriosam in,
                    pariatur mollitia veniam nulla iusto molestias ullam,
                    quas amet quidem neque maiores tenetur laudantium reprehenderit,
                    minima necessitatibus dolores illum. Vero quas error, dolor
                    fugiat, expedita excepturi vitae, officiis dolorem cum reiciendis
                    inventore? Rem provident cumque illo consectetur distinctio quos
                    repudiandae repellendus accusamus vitae maxime aliquid corrupti
                    corporis voluptate, accusantium maiores similique ex, voluptatibus
                    unde, dignissimos perferendis numquam tenetur cum et! Incidunt,
                    possimus voluptate adipisci debitis assumenda distinctio ipsa vero.
                    Animi cupiditate sed qui ex ducimus.
                </p>


                <div className='divBtns'>
                    <button>Ordenar Ahora</button>
                    <button>Ver el Menu</button>
                </div>


            </div>

        </Fragment>

    )
}



export default Homepage