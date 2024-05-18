import { createBrowserRouter } from 'react-router-dom'
import Home from './page/home'
import Sobre from './page/sobre'
import NotFound from './page/404'
import Contato from './page/contato'
import Tasks from './page/tasks'
import Cadastro from './page/cadastro'
import Login from './page/login'

const router = createBrowserRouter([
  { path: '/', element: <Home />, errorElement: <NotFound/> },
  { path: '/sobre', element: <Sobre /> },
  {path: '/contato', element: <Contato/>},
  {path: '/tasks', element: <Tasks/>},
  {path: '/cadastrar', element: <Cadastro/>},
  {path: '/login', element: <Login/>}
])

export default router