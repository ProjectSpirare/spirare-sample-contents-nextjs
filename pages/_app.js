import '../styles/globals.css'

import { useEffect } from 'react';

import beautify from 'js-beautify'

function MyApp ({ Component, pageProps }) {
  useEffect(() => {
    let pomlElements = document.getElementsByTagName('poml');
    var poml = pomlElements[0]
    let pomlText = document.getElementById('poml-text');

    const beautifyOptions = {
      indent_size: 2,
      end_with_newline: true,
      preserve_newlines: true,
      max_preserve_newlines: 0,
      wrap_line_length: 0,
      wrap_attributes_indent_size: 0,
    };

    let beautyPomlText = beautify.html_beautify(poml.outerHTML.replace(/>/g, ">\n"), beautifyOptions);
    pomlText.innerText = beautyPomlText;
  })

  return <Component {...pageProps} />
}

export default MyApp
