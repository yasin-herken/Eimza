import React, { useEffect, useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Main from './components/Main';
const scripts = [
  "./assets/js/main.js"
];
function loadScript(url) {

  return new Promise((resolve, reject) => {
    var script = document.createElement("script")
    script.type = "text/javascript";
    if (script.readyState) {  // only required for IE <9
      script.onreadystatechange = function () {
        if (script.readyState === "loaded" || script.readyState === "complete") {
          script.onreadystatechange = null;
          resolve();
        }
      };
    } else {  //Others
      script.onload = function () {
        resolve();
      };
    }

    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
  })


}


const useScripts = () => {
  const [isLoaded, setLoaded] = useState(false);

  useEffect(() => {
    Promise
      .all(scripts.map(script => loadScript(script)))
      .then(() => setLoaded(true));
  }, []);


  return isLoaded;
}

function App() {
  const isLoaded = useScripts();

  useEffect(
    () => {

      if (!isLoaded) {
        return;
      }
    },
    [
      isLoaded
    ]
  );
  return (
    <React.Fragment>
      <Header />
      <Hero />
      <Main />
      <Footer />
      <a href="#" class="back-to-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>
    </React.Fragment>
  );
}

export default App;
