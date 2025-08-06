import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'

function About() {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <main className="container mt-4">
        <div className="text-center mb-4">
          <h1>Sobre Nosotros</h1>
          <p className="lead">
            Bienvenidos a nuestra app de uñas, donde cuidamos cada detalle para que
            tengas la mejor experiencia y las uñas que siempre soñaste.
          </p>
        </div>

        {/* Sección con imagen y texto */}
        <div className="row align-items-center mb-5">
          <div className="col-md-6 mb-3">
            <div className="image-placeholder bg-secondary text-white d-flex justify-content-center align-items-center" style={{height: '250px'}}>
              <span></span>
            </div>
          </div>
          <div className="col-md-6">
            <h3>Nuestra Historia</h3>
            <p>
              Desde hace más de 10 años, nos dedicamos a embellecer uñas con dedicación,
              profesionalismo y mucho amor. Contamos con un equipo experto y productos
              de primera calidad.
            </p>
          </div>
        </div>

        {/* Otra sección con imagen y texto, invertida */}
        <div className="row align-items-center mb-5">
          <div className="col-md-6 order-md-2 mb-3">
            <div className="image-placeholder bg-secondary text-white d-flex justify-content-center align-items-center" style={{height: '250px'}}>
              <span>Imagen de servicio</span>
            </div>
          </div>
          <div className="col-md-6 order-md-1">
            <h3>Servicios</h3>
            <p>
              Ofrecemos manicura, pedicura, uñas acrílicas, gelish y mucho más. Siempre
              buscamos la satisfacción total de nuestros clientes.
            </p>
          </div>
        </div>

        {/* Puedes agregar más secciones similares según necesites */}
      </main>
    </>
  )
}

export default About
