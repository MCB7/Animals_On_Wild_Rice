import './App.css';
import './styles.css';
import React from 'react';
import HomeDesktop from './HomeDesktop.js'
import HomeMobile from './HomeMobile.js'
import './styles/Home-media-query.css'





function Home() {
  
    return (
      <div>

     <div className="Home-Desktop">
     <HomeDesktop/>
     </div>

     <div className="Home-Mobile">
     <HomeMobile/>
     </div>

      </div>

    );
}

export default Home;
