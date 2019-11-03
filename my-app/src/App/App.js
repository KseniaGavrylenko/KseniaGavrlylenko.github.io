import React from 'react';
import './reset.css'
import './style.css'
import '../common/all_travels.css'
import '../common/videos.css'
import '../common/contacts.css'
import './media.css'
import Header from './Header/Header.js'
import Main from './Main/Main.js'
import Footer from './Footer/Footer.js'

const App = () =>{
  return(
    <div>
      <Header/>
        <Main/>
          <Footer/> 

      
    </div>
  )
}

export default App