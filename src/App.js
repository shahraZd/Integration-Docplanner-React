import React from 'react'
import Navbar from './components/navbar/Navbar'
import Intro from "./components/intro/Intro"
import Section1 from './components/section1/Section1'
import Section2 from './components/section2/Section2'
import Section3 from './components/section3/Section3'
import Footer from './components/footer/Footer'

import {menu,users,features,cards} from './data'


const App = () => {
  return (
    <div>
      <Navbar menu={menu}/>
      <Intro/>
      <Section1 users={users}/>
      <Section2 features={features}/>
      <Section3 cards={cards}/>
      <Footer/>
    </div>
  )
}

export default App
