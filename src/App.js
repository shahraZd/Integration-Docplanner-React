import React from 'react'
import Navbar from './components/navbar/Navbar'
import Intro from "./components/Intro"
import Client from './components/Client'
import Section2 from './components/Stats'
import Cities from './components/cities/Cities'
import Footer from './components/Footer'

import "./App.css"

import {menu,clients,stats,cities} from './data'


const App = () => {
  return (
    <div>
      <Navbar menu={menu}/>
      <Intro/>
      <Client clients={clients}/>
      <Section2 stats={stats}/>
      <Cities cities={cities}/>
      <Footer/>
    </div>
  )
}

export default App
