// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'

import HomePage from "./component/PageLayout/HomePage"
import MainLayout from "./component/PageLayout/MainLayout"
import LoginPage from "./component/PageLayout/LoginPage"
import CodeEditor from './component/PageLayout/CodeEditor'
function App() {


  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<CodeEditor />} />
        <Route path='/editor' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
      </Route>
    )

  )

  return <RouterProvider router={router} />

}

export default App
