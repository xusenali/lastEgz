import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { Outlet } from 'react-router'
import { Home } from './pages/Home'

const App = () => {
  return (
    <div className='sm:!mt-5'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App