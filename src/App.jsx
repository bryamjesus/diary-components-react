import { data } from './data/contacto'

const App = () => {
  return (
    <div>
      <nav className="navbar bg-dark">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">Agendad de contactos</span>
        </div>
      </nav>

      <div className="container">
        <div className='row mt-3'>
          <div className='col-md-8'>
            <h3>Lista de contáctos</h3>
            {data.map((x) => (
              <div key={x.id} className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <img src="https://rickandmortyapi.com/api/character/avatar/250.jpeg" className="img-fluid rounded-start" alt="..." />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{x.nombres} {x.apellidos}</h5>
                      <p className="card-text">
                      <i className="bi bi-telephone-fill"></i> {x.telefono}
                      </p>
                      <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className='col-md-4'>
            <h3>Nuevo contácto</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
/*
<div className='row mt-3'>
      <div className='col-md-8'>
        <h3>Lista de contáctos</h3>
        {data.map((item)=>(
          <div>
              <div>{item.nombres}</div>
              <div>{item.apellidos}</div>
          </div>
        ))}
      </div>
      <div className='col-md-4'>
        <h3>Nuevo contácto</h3>
      </div>
    </div>*/
