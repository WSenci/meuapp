import { createBrowserRouter } from 'react-router-dom'
import Home from './page/home'
import Sobre from './page/sobre'
import NotFound from './page/404'
import Contato from './page/contato'
import Tasks from './page/tasks'

const router = createBrowserRouter([
  { path: '/', element: <Home />, errorElement: <NotFound/> },
  { path: '/sobre', element: <Sobre /> },
  {path: '/contato', element: <Contato/>},
  {path: '/tasks', element: <Tasks/>}
])

export default router