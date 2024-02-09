import NavBar from './Components/NavBar/NavBar'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import { BrowserRouter, Routes , Route} from 'react-router-dom'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer'

import { CartProvider } from './Contenxt/CartContenxt'

function App() {

  return (
    <>
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer greeting={'Listado de todos los productos'}/>} />
        <Route path='/category/:categoryId' element={<ItemListContainer greeting={'Listado de los productos filtrados'}/>} />
        <Route path='/detail/:id' element={<ItemDetailContainer/>} />
        <Route path='/*' element={<h2>No existe sitio</h2>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
