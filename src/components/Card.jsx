const Card = (props) => {
  return (
    <div className='col-md-6'>
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
              <h5 className="card-title">{props.nombres} {props.apellidos}</h5>
              <div className="card-text">
                <p >
                  <i className="bi bi-telephone-fill"></i> {props.telefono}
                </p>
                <p >
                  <i className="bi bi-envelope-fill"></i> {props.email}
                </p>
                <p >
                  <i className="bi bi-house-fill"></i> {props.direccion}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card