
import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Layout from './components/Layout'

const App = () => {
  return (
    <>
      <Header nombre="Ximena Paez Campo" />
      <div className="container d-flex">
        <Layout />
      </div>
      <Footer />
    </>
  )
}

export default App
