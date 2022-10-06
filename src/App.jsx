import { data } from './data/contacto'

const App = () => {
  return (
    <div className="">
      {data.map((x) => x.id)}
    </div>
    
  )
}

export default App
