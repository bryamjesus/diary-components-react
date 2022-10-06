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
            <div className="input-group mb-3">
              <input type="text" className="form-control" placeholder="Buscar por nombre..." />
              <button className="btn btn-secondary" type="button">Buscar</button>
            </div>

            <div className='row'>
              {data.map((x) => (
                <div key={x.id} className='col-md-6'>
                  <div className="card mb-3">
                    <div className="row g-0">
                      <div className="col-md-4">
                        <img src="https://rickandmortyapi.com/api/character/avatar/250.jpeg" className="img-fluid rounded-start" alt="..." />
                        <div className='d-flex justify-content-around'>
                          <button className='btn btn-secondary'><i className="bi bi-pencil-square"></i></button>
                          <button className='btn btn-danger'><i className="bi bi-trash"></i></button>
                        </div>
                      </div>
                      <div className="col-md-8">
                        <div className="card-body">
                          <h5 className="card-title">{x.nombres} {x.apellidos}</h5>
                          <div className="card-text">
                            <p >
                              <i className="bi bi-telephone-fill"></i> {x.telefono}
                            </p>
                            <p >
                              <i className="bi bi-envelope-fill"></i> {x.email}
                            </p>
                            <p >
                              <i className="bi bi-house-fill"></i> {x.direccion}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
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
