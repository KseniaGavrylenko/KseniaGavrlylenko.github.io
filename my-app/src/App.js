import React from 'react';
import './common/reset.css'
import './App/style.css'
import './common/all_travels.css'
import './common/videos.css'
import './common/contacts.css'
import Header from './App/Header/Header.js'
import Main from './App/Main/Main.js'
import Footer from './App/Footer/Footer.js'

const App = () =>{
  return(
    <div>
      <Header/>
        <Main/>
                <section className="footer">
                </section> 

      
    </div>
  )
}

export default App