import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './routes'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)

/*Crie as páginas para o projeto: vamos ter uma página inicial
com uma breve apresentação do nosso projeto, uma página de contato
com o formulário que foi criado na última atividade, uma página “Sobre”
comentando sobre quem desenvolveu o projeto e finalmente uma última página
que vai listar uma série de tarefas sobre o projeto.*/