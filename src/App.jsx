import { data } from './data/contacto'

const App = () => {
  return (
    <div>
      <nav class="navbar bg-dark">
        <div class="container-fluid">
          <span class="navbar-brand mb-0 h1">Agendad de contactos</span>
        </div>
      </nav>
      <div className="">

        {data.map((x) => x.id)}
      </div>
    </div>
  )
}

export default App