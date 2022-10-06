import { useRef } from 'react'
import Cabecera from './components/Cabecera'
import Card from './components/Card'
import { data } from './data/contacto'

const App = () => {
  const inputSearch = useRef()
  const handleSearch = () => {
    const text = inputSearch.current.value
    console.log(text)
  }

  const handleEdit = (id) => {
    console.log(id)
  }

  const handleDelete = (id) => {
    console.log(id)
  }

  return (
    <div>
      <Cabecera />

      <div className="container">
        <div className='row mt-3'>
          <div className='col-md-8'>
            <h3>Lista de contáctos</h3>
            <div className="input-group mb-3">
              <input ref={inputSearch} type="text" className="form-control" placeholder="Buscar por nombre..." />
              <button onClick={handleSearch} className="btn btn-secondary" type="button">Buscar</button>
            </div>
            <div className='row'>
              {data.map((x) => (
                <Card key={x.id} datos={x} fnEdit={handleEdit} fnDelete={handleDelete} />
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
