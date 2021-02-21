import '../styles/globals.css'

import { useEffect } from 'react';

function MyApp ({ Component, pageProps }) {
  useEffect(() => {
    let next = document.getElementById('__next');
    let poml = document.getElementsByTagName('poml');
    poml[0].appendChild(next.children[0]);
  })

  return <Component {...pageProps} />
}

export default MyApp
